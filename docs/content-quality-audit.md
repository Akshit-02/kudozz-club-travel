# Content Quality Audit (2026-10-09)

## Scope and method

All **1,029 article URLs** (`/blog/*`: 582 hand-written destination/state guides, 143 things-to-do articles, 304 cluster articles) received an individual decision. Package, hub and utility pages are covered in `seo-master-codebase-audit.md` and `seo-before-after-report.md`.

How each article was evaluated (honest account of what was read by whom):

1. **Full-text machine read of every article** from the production HTML (`.next/server/app/blog/*.html`): filler/AI phrases, first-hand claims, repeated paragraphs across pages, every year mentioned (stale or future dates), price mentions, agency superlatives.
2. **Per-article review card** for every URL (`scripts/seo-audit/review-batch.py`): title, H1, meta description, opening paragraph, full H2 outline, FAQ count, word count, flags. A decision with a written reason was recorded for each URL (`scripts/seo-audit/decisions/b00–b22.tsv`).
3. **Targeted full reads and fact checks** wherever a card, flag or entity raised a doubt (permit regimes, new infrastructure, closures, superlatives, rankings, UNESCO status, spellings). Every correction was verified against an official or primary source before editing.
4. **Cannibalisation**: decisions cross-referenced with the eight cluster cannibalisation reviews (`*-cannibalization.md`) and the things-to-do title map.

## Findings

| Signal | Result |
|---|---|
| Filler / AI phrasing ("nestled", "embark", "in this comprehensive guide"…) | Near zero: 24 occurrences across 1,029 pages; none over threshold |
| First-hand claims | 1 page, the Ranthambore guest post, legitimately first-person and attributed |
| Repeated paragraphs | Only template text (update line, safety disclaimers, CTA copy). No copied body content |
| Thin articles | None. Minimum 975 words, median 1,608 |
| FAQs | 1,028/1,029 (exception: the guest narrative) |
| Truncated meta descriptions | 595 → 0 |
| Factual / freshness errors | About 30 pages corrected (see below) |
| Unsupported superlatives in titles | 5 corrected; a few hedged in-body claims remain where the page says "widely cited" |

## Factual and freshness corrections made

| Topic | Pages | Was | Now (source) |
|---|---|---|---|
| Mizoram Inner Line Permit | Mizoram hub + 12 guides | Not mentioned | ILP required for Indian visitors; PAP for foreigners reinstated Dec 2024 (ilp.mizoram.gov.in; MHA) |
| Manipur ILP | Manipur hub | Not mentioned | ILP since 2019; portal and airport kiosks (manipurilponline.mn.gov.in) |
| Mizoram rail | Mizoram hub, Aizawl | "No railway station" | Bairabi–Sairang line open 13 Sep 2025 (newsonair.gov.in) |
| Nagaland PAP | Hornbill Festival | "Foreigners don't usually need a PAP" | PAP required; eased only for the 2025 festival |
| Sela Tunnel | Sela Pass, Tawang | "Only road to Tawang"; winter cuts Tawang off | Tunnel open since 9 Mar 2024 |
| Baisaran | Pahalgam, J&K hill stations | Recommended on Day 1 | Closed since the Apr 2025 attack; still shut in Apr 2026 |
| Mount Manipur | 1 guide | "Second-highest in A&N" | Third-highest; highest in South Andaman (Incredible India) |
| Sarnath | 1 guide | No UNESCO mention | Inscribed July 2026, India's 45th site (UN India) |
| Sanchi | 1 guide | "The oldest stone structure" | "One of the oldest" (matches its own FAQ) |
| Titles | Mawlynnong, New Delhi, Nalanda, Vaishali, Chittorgarh | Overstated or outdated (e.g. "Rajpath") | Corrected |
| Spellings | 3 pages | Vishwa-Bharati, Kurusura | Visva-Bharati, Kursura |

## Decisions summary

| Action | Count | Meaning |
|---|---|---|
| KEEP | 433 | Strong; meta within limits; intent clear |
| OPTIMIZE | 593 | Targeted fixes (mostly descriptions, some titles) |
| REWRITE | 3 | Material factual correction (Mount Manipur, Pahalgam, Sela Pass) |
| EXPAND / MERGE / REDIRECT / NOINDEX / REMOVE | 0 | No evidence justified them; see manual items |

## Manual-review items
- **Low-intent Delhi neighbourhood pages** (Janakpuri, Laxmi Nagar, Rohini, Najafgarh, Vasant Kunj): candid and unique, but likely low search demand. Noindex if Search Console shows no impressions after 90 days.
- **Time-sensitive facts:** Kuno cheetah sightings, Medaram jatara dates, Kumbh/Simhastha dates, Rann Utsav season, NH66 completion, Yadadri/Yadagirigutta naming, Baisaran reopening.
- **Cluster articles** score 2.3–2.9 AEO because topic pages ("how to plan…", packing lists) have no "how to reach" section. This is correct by intent, not a defect.
