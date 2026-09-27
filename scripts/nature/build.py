"""Validate the Nature Travel articles and write src/lib/nature-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster nature).

  python3 scripts/nature/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "nature", *sys.argv[1:]]))
