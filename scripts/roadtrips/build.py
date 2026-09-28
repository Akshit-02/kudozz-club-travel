"""Validate the Road Trips articles and write src/lib/roadtrips-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster roadtrips).

  python3 scripts/roadtrips/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "roadtrips", *sys.argv[1:]]))
