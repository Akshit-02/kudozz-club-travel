"""Verify the built HTML of the Beach Travel articles and /beach-travel.
Wrapper around scripts/adventure/verify-html.py --cluster beach."""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "verify-html.py"), "--cluster", "beach"]))
