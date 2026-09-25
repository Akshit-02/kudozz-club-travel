"""Record a review batch: every item on the batch's sheets is marked reviewed;
ids passed on the command line are rejected. Usage: python3 review.py DIR [id id ...]"""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
d = sys.argv[1]
index = json.load(open(os.path.join(d, "index.json")))
bad = {int(x) for x in sys.argv[2:]}
rf, jf = os.path.join(HERE, "reviewed.json"), os.path.join(HERE, "rejects.json")
reviewed = set(json.load(open(rf))) if os.path.exists(rf) else set()
rejects = set(json.load(open(jf))) if os.path.exists(jf) else set()
for k, v in index.items():
    reviewed.add(v)
    if int(k) in bad:
        rejects.add(v)
json.dump(sorted(reviewed), open(rf, "w"), indent=0)
json.dump(sorted(rejects), open(jf, "w"), indent=0)
print(f"reviewed {len(index)} (+{len(bad)} rejected); totals: reviewed {len(reviewed)}, rejected {len(rejects)}")
