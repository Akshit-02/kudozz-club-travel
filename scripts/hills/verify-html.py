"""Verify the built HTML of the Hill Station Travel articles and /hill-station-travel.
Wrapper around scripts/adventure/verify-html.py --cluster hills."""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.exit(subprocess.call([sys.executable, os.path.join(here, "..", "adventure", "verify-html.py"), "--cluster", "hills"]))
