"""Retain hashed assets before switching a static release. Never deletes assets."""
import argparse
import hashlib
from pathlib import Path
import shutil


def retain_assets(release: Path, shared: Path) -> int:
    source = release.resolve() / '_next' / 'static'
    if not source.is_dir():
        raise ValueError(f'Missing static assets: {source}')
    count = 0
    for original in sorted(source.rglob('*')):
        if original.is_symlink():
            raise ValueError(f'Unexpected symlink: {original}')
        if not original.is_file():
            continue
        target = shared / '_next' / 'static' / original.relative_to(source)
        if target.exists():
            if hashlib.sha256(target.read_bytes()).digest() != hashlib.sha256(original.read_bytes()).digest():
                raise ValueError(f'Immutable asset collision: {target.name}')
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(target.name + '.publishing')
        shutil.copyfile(original, temporary)
        temporary.replace(target)
        count += 1
    return count


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('release', type=Path)
    parser.add_argument('shared', type=Path)
    args = parser.parse_args()
    print(f'Retained {retain_assets(args.release, args.shared)} new assets')
