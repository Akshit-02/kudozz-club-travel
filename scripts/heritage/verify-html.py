"""Verify the built HTML of the Heritage & Cultural Tourism articles and /heritage-cultural-tourism.
Wrapper around scripts/adventure/verify-html.py --cluster heritage."""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "verify-html.py"), "--cluster", "heritage"]))
