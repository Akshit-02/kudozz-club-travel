"""Validate the Heritage & Cultural Tourism articles and write src/lib/heritage-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster heritage).

  python3 scripts/heritage/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "heritage", *sys.argv[1:]]))
