"""Make WebP previews from reviewed localized reader PNGs. Requires Pillow with WebP."""
import argparse
import hashlib
import io
import json
import tempfile
from pathlib import Path

from PIL import Image


LOCALES = ('ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl')
QUALITIES = {240: 83, 360: 85, 540: 85}


def generate(public_root, version):
    if version <= 10814:
        raise ValueError('The original shared thumbnails are retained separately.')
    source_dir = public_root / 'guide' / str(version)
    manifest = json.loads((source_dir / 'localized-captures.json').read_bytes())
    if manifest['versionCode'] != version:
        raise ValueError('Capture manifest version mismatch')
    output = public_root / 'home' / str(version)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=output.parent, prefix='.reader-') as temporary:
        staged = Path(temporary) / str(version)
        receipts = {}
        for locale in LOCALES:
            name = f'{locale}/reader.png'
            records = [row for row in manifest['captures'] if row['path'] == name]
            if len(records) != 1:
                raise ValueError(f'Expected one reviewed capture for {name}')
            record = records[0]
            png = (source_dir / name).read_bytes()
            digest = hashlib.sha256(png).hexdigest()
            if (record['locale'] != locale or record['uiLocale'] != locale
                    or record['versionCode'] != version or record['pixelReview'] != 'PASS'
                    or record['sha256'] != digest or record['bytes'] != len(png)):
                raise ValueError(f'Capture provenance mismatch: {name}')
            localized = staged / locale
            localized.mkdir(parents=True)
            by_width = {}
            with Image.open(io.BytesIO(png)) as original:
                if original.format != 'PNG' or original.size != (1200, 1920):
                    raise ValueError(f'Unexpected reader capture dimensions or format: {name}')
                rgb = original.convert('RGB')
                for width, quality in QUALITIES.items():
                    target = localized / f'reader-{width}.webp'
                    scaled = rgb.resize((width, width * 8 // 5), Image.Resampling.LANCZOS)
                    scaled.save(target, 'WEBP', quality=quality, method=6)
                    by_width[str(width)] = hashlib.sha256(target.read_bytes()).hexdigest()
            receipts[locale] = {'sourceSha256': digest, 'sha256ByWidth': by_width}
        receipt = {'versionCode': version, 'locales': receipts}
        (staged / 'reader-thumbnails.json').write_bytes((json.dumps(receipt, indent=2) + '\n').encode())
        if output.exists():
            for item in staged.rglob('*'):
                if item.is_file() and (output / item.relative_to(staged)).read_bytes() != item.read_bytes():
                    raise ValueError(f'Existing versioned thumbnail set differs at {item.relative_to(staged)}')
        else:
            staged.rename(output)
    print(f'{output}: {len(receipts)} localized readers, {len(receipts) * len(QUALITIES)} WebP previews')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('version', type=int, help='capture versionCode, e.g. 11032')
    parser.add_argument('--public-root', type=Path, default=Path(__file__).resolve().parents[1] / 'public')
    args = parser.parse_args()
    generate(args.public_root, args.version)
