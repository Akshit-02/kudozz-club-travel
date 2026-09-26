"""Validate the Beach Travel articles and write src/lib/beach-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster beach).

  python3 scripts/beach/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "beach", *sys.argv[1:]]))
