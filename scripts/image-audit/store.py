"""Loads resolver output: resolved.json first, then per-worker files (newer) on top."""
import glob, json, os
HERE = os.path.dirname(os.path.abspath(__file__))


def load_resolved():
    res = {}
    for f in [os.path.join(HERE, "resolved.json")] + sorted(glob.glob(os.path.join(HERE, "resolved-*.json"))):
        if os.path.exists(f):
            try:
                res.update(json.load(open(f)))
            except json.JSONDecodeError:
                pass
    return res
