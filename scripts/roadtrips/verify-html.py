"""Verify the built HTML of the Road Trips articles and /road-trips.
Wrapper around scripts/adventure/verify-html.py --cluster roadtrips."""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "verify-html.py"), "--cluster", "roadtrips"]))
