"""Validate the Wildlife Tourism articles and write src/lib/wildlife-index.json.
Thin wrapper: the rules live in scripts/adventure/build.py (--cluster wildlife).

  python3 scripts/wildlife/build.py [--dev]
"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "build.py"), "--cluster", "wildlife", *sys.argv[1:]]))
