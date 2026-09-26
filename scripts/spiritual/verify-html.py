"""Verify the built HTML of the Spiritual Tourism articles and /spiritual-tourism.
Wrapper around scripts/adventure/verify-html.py --cluster spiritual."""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "verify-html.py"), "--cluster", "spiritual"]))
