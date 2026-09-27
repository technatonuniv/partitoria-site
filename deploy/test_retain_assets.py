from pathlib import Path
import tempfile
import unittest
from retain_assets import retain_assets


class CachedPageDeploymentTest(unittest.TestCase):
    def test_old_and_new_styles_survive_switch_and_rollback(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for release, filename in [('old', 'old-hash.css'), ('new', 'new-hash.css')]:
                assets = root / release / '_next/static/css'
                assets.mkdir(parents=True)
                (assets / filename).write_text(release)
                retain_assets(root / release, root / 'shared')
            retain_assets(root / 'old', root / 'shared')
            self.assertEqual('old', (root / 'shared/_next/static/css/old-hash.css').read_text())
            self.assertEqual('new', (root / 'shared/_next/static/css/new-hash.css').read_text())

    def test_same_url_cannot_silently_change_bytes(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            asset = root / 'release/_next/static/css/hash.css'
            asset.parent.mkdir(parents=True)
            asset.write_text('original')
            retain_assets(root / 'release', root / 'shared')
            asset.write_text('changed')
            with self.assertRaisesRegex(ValueError, 'collision'):
                retain_assets(root / 'release', root / 'shared')
            self.assertEqual('original', (root / 'shared/_next/static/css/hash.css').read_text())


if __name__ == '__main__':
    unittest.main()
