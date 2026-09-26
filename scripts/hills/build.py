"""Validate the Hill Station Travel articles and write src/lib/hills-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster hills).

  python3 scripts/hills/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "hills", *sys.argv[1:]]))
