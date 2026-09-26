"""Validate the Spiritual Tourism articles and write src/lib/spiritual-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster spiritual).

  python3 scripts/spiritual/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "spiritual", *sys.argv[1:]]))
