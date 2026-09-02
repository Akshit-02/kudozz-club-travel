# Kudozz Club — Email Marketing Templates

Four production-ready HTML emails, built from the actual site's brand system (colors, fonts, copy voice, founder identity from `/about`, and the interest fields already captured by the `/newsletter` signup form). Table-based layout with inline CSS — tested for Outlook/Gmail/Apple Mail compatibility, mobile-responsive, dark-mode-safe (`color-scheme: light` forces light rendering so brand colors never invert).

## The four templates, and why these four

The set covers the full subscriber lifecycle — each stage has a distinct job:

| # | File | Trigger | Job |
|---|------|---------|-----|
| 1 | `01-welcome-email.html` | Immediately after signup | Convert the signup into a **first click** while intent is highest. Welcome emails typically get 4-5x the open rate of regular campaigns — this is the single highest-leverage email you send. |
| 2 | `02-weekly-digest.html` | Recurring (weekly or bi-weekly) | The **recurring traffic engine**. Keeps the list warm, drives repeat visits, and doubles as a forward/referral loop. |
| 3 | `03-new-guides-announcement.html` | One-off, tied to a real content drop | Turns a content investment (like the 40 Uttarakhand + West Bengal guides) into an **immediate traffic spike**. Reuse this template every time you ship a new region or a big batch of guides. |
| 4 | `04-winback-reengagement.html` | Subscriber inactive 60-90+ days | **Protects deliverability.** A list full of people who never open hurts inbox placement for everyone else. This reactivates or gracefully downgrades frequency instead of letting them silently rot. |

## Before you send

1. **Swap the merge tags.** Every template uses generic `{{BRACKET}}` placeholders — map them to your ESP's syntax:

   | Placeholder | Mailchimp | Klaviyo | Brevo | SendGrid (dynamic templates) |
   |---|---|---|---|---|
   | `{{FIRST_NAME}}` | `*|FNAME|*` | `{{ first_name|default:'there' }}` | `{{ contact.FIRSTNAME }}` | `{{first_name}}` |
   | `{{UNSUBSCRIBE_URL}}` | `*|UNSUB|*` | `{{ unsubscribe_link }}` | `{{ unsubscribe }}` | `{{{unsubscribe}}}` |
   | `{{PREFERENCES_URL}}` | `*|UPDATE_PROFILE|*` | manage-preferences link | preference center link | your own preference-center URL |
   | `{{COMPANY_NAME}}` / `{{COMPANY_ADDRESS}}` | static text | static text | static text | static text |
   | `{{INTEREST_1}}` | merge field from signup | profile property | contact attribute | custom field |
   | `{{FORWARD_URL}}` | Mailchimp's built-in "forward to a friend" link | build manually or omit | Brevo's forward link | omit or build manually |

   **This maps directly onto what your `/newsletter` form already collects** — `firstName`, `lastName`, `email`, and `interests[]` (Mountains, Beaches, Heritage, Adventure, Road Trips, Budget Travel). Right now `POST /api/newsletter` only sends you a notification email (see `src/lib/mailer.ts`) — it doesn't add contacts to an ESP list yet. Wire that route to your ESP's API (or a tool like Zapier) so these fields flow straight into merge tags/segments.

2. **CAN-SPAM / GDPR footer.** Every template has a placeholder physical mailing address (`{{COMPANY_ADDRESS}}`) — this is a **legal requirement** for commercial email in most jurisdictions. Fill in a real address before sending.

3. **Images use absolute `https://club.kudozz.in/...` URLs.** These only resolve once those images exist at that path in production — verify each URL loads before sending. Swap in different hero/card images per send by changing the `src` (all current picks reuse real images already live in `public/images/destinations/`).

4. **All CTA links carry UTM params** (`utm_source=email&utm_medium=...&utm_campaign=...`) so you can track email-driven traffic in analytics from day one. Adjust `utm_campaign` per actual send if you want per-blast granularity.

## Subject line + preheader library (for A/B testing)

Each template file has its subject/preheader options documented in an HTML comment at the top. Quick reference:

- **Welcome:** `Welcome to the Club, {{FIRST_NAME}} 🧭 your first guide is inside` · alt: `You're in. Here's where to start exploring.`
- **Weekly digest:** `🗺️ This week: 3 new guides worth your Saturday coffee` · alt: `New this week: Kedarnath, Darjeeling & the Sundarbans`
- **Announcement:** `We just published 40 new guides. Yours are inside 🏔️` · alt: `New: The Complete Uttarakhand + West Bengal Collection`
- **Win-back:** `Still dreaming of that trip, {{FIRST_NAME}}?` · alt: `Should we stop emailing you? (totally your call)`

Always A/B test subject lines on a 10-20% sample before full send — emoji-led subjects tend to lift open rate but can trip spam filters for some ESPs/inboxes, so test rather than assume.

## Sending cadence recommendation

- **Welcome:** transactional/triggered, send within minutes of signup.
- **Weekly digest:** same day + time every week (Thursday or Saturday ~8am local tests well for trip-planning content — weekend mindset).
- **Announcement:** only when there's real news (a big content batch, a seasonal push). Don't manufacture urgency — the moment you had this batch of 40 guides was a real one; the next real moment might be a seasonal collection (e.g. "12 Best Places to Visit in Winter").
- **Win-back:** automated, triggered by an ESP engagement segment (no opens/clicks in 60-90 days). Follow with a second, blunter "last chance" email 2 weeks later if still no engagement, then suppress from regular sends to protect deliverability.

## Cold outreach — introducing Kudozz to people who've never heard of it

Templates 1-4 above are for people who already opted in (they know who Kudozz is). Templates 5-7 are for **cold contacts — raw awareness, zero prior relationship**. That's a different problem, so they're built differently on purpose:

| # | File | Format | Why |
|---|------|--------|-----|
| 5 | `05-cold-personal-note.html` | Near-plain-text, no logo, no button | Reads like a real 1:1 email from a person, not a blast. Highest deliverability, highest reply rate for a true cold send. If your outreach tool supports true plain-text or Gmail-style "rich text" sending, use that instead of HTML entirely — this file is a lightweight fallback. |
| 6 | `06-cold-value-first.html` | Light HTML, one image, one CTA | Leads with the value (a genuinely useful guide collection) *before* the brand pitch. The "who's behind this" trust block comes after, not before. |
| 7 | `07-cold-curiosity-listicle.html` | No images, a real 7-item list | Demonstrates value inside the email itself — a specific, useful list — rather than just promising value behind a link. Brand name appears once, at the very end. |

**None of these use the heavy branded chrome from templates 1-4** (dark footer, big rounded buttons, hero banners) — that visual weight reads as "marketing blast" to someone who's never heard of you, which is exactly what triggers spam filters and instant deletes. Cold outreach earns trust through restraint, not production value.

### Before you send a single cold email — read this

1. **Where is this list coming from?** This is the decision that determines whether this campaign works or actively damages the brand. A *purchased* or scraped list will generate spam complaints, tank your sender reputation, and can get `club.kudozz.in`'s mail domain blacklisted — which then breaks deliverability for your real newsletter too. Legitimate cold-outreach sources: co-marketing/list swaps with adjacent (non-competing) travel or lifestyle brands, a lead magnet placed on someone else's audience with their permission, publicly available B2B/partnership contacts, or a paid ad platform's lookalike/interest targeting (which isn't really "cold email" at all — it's an ad). If the honest answer is "I don't know where these emails came from," don't send to that list.
2. **Use a separate sending domain or subdomain** for cold outreach (e.g. `hello.kudozz.in`) rather than the domain your real newsletter sends from. Cold sends have inherently higher bounce/complaint rates while you're learning what works — isolate that risk so it can't hurt deliverability for your actual subscriber list.
3. **Warm up gradually.** Start at 20-50 emails/day from a new sending domain, watch bounce and complaint rates, and scale up over 2-4 weeks. Blasting a large cold list on day one is the single most common way to get flagged.
4. **Legal baseline (CAN-SPAM-style, apply the stricter rule if you have any EU/UK contacts):** truthful subject line and from-name, a real physical address in the footer, and a working opt-out honored promptly — all three are already built into templates 5-7. If you have reason to believe any recipients are in the EU/UK, note that GDPR generally requires consent *before* commercial email, which cold outreach by definition doesn't have — restrict cold sends to jurisdictions where this model is legal, or switch to a consent-first channel (ads, content marketing, partnerships) for those contacts.
5. **Track reply and complaint rate obsessively for the first few hundred sends.** A complaint rate above ~0.1% is a stop-and-fix signal, not a "push through it" signal.

### Cold subject line library

- **Personal note:** `quick one for your next trip` · alt: `thought you'd like this, {{FIRST_NAME}}` · alt: `an India travel resource worth bookmarking`
- **Value-first:** `the India guide collection I wish existed when I started` · alt: `free: 200+ India travel guides, no signup required`
- **Curiosity listicle:** `7 India destinations most travellers have never heard of` · alt: `skip Goa. try these instead.`

Cold subject lines should sound like something a person actually types, not a campaign headline — lowercase, specific, no emoji, no exclamation points. That's deliberate across all three templates above.

## Plain-text emails — no HTML at all

Templates 5-7 are HTML files designed to *look* like plain text. Templates 8-11 go one step further and drop HTML entirely — `.txt` files you paste straight into a plain-text compose window or your ESP's plain-text field. This is the format with the least friction and the least "marketing" signal of anything in this kit — use it when the goal is pure awareness and a reply-friendly first touch, not a designed campaign.

| # | File | Subject | Hook |
|---|------|---------|------|
| 8 | `08-plaintext-checklist-hook.txt` | `Check this before your next trip` | Generic pre-trip-planning urgency — works for any recipient regardless of destination. |
| 9 | `09-plaintext-destination-checklist.txt` | `Your {{DESTINATION}} trip, mapped out (before you book)` — one of 5 subject variants | Real mail-merge template — `{{DESTINATION}}` / `{{DESTINATION_URL}}` are live tokens, filled in automatically by `scripts/send-campaign.js`. Unlike every other template in this kit, this one also defines 5 wording variants each for the subject, opening line, brand-description line, and closing link line — the script picks one of each at random per send, so the wording itself (not just the destination) is different almost every time. Copy avoids "free"/"checklist" (generic, bulk-mail-flagged wording) in favor of specific language, and every variant uses a full `https://` link rather than a bare domain. **By request, the assembled email ends at the "Kudozz Club" sign-off — no postal address or unsubscribe link**, unlike templates 08/10/11 below, which still include that footer. CAN-SPAM (US) and similar laws elsewhere require both in commercial email, so this is a compliance trade-off worth being deliberate about at real volume. |

**Sending this one at scale?** `scripts/send-campaign.js` automates exactly this template end to end — reads `scripts/input.csv` (just `email,name`), picks a random destination from a 10-place list defined in the script and a random subject/opening-line/brand-line/closing-line combination from the template (5×5×5×5×10 = 31,250 possible emails), skips anyone already in `scripts/sent_mails_09.csv`, sends via nodemailer, and appends every send to that log so re-runs never double-send. See `scripts/README.md`.
| 10 | `10-plaintext-what-is-kudozz.txt` | `What is Kudozz Club? (30 seconds)` | Straight brand intro — leads with "what is this" for recipients who need that framing before anything else. |
| 11 | `11-plaintext-timing-hook.txt` | `Are you planning to visit at the wrong time?` | A different anxiety than "you haven't planned yet" — plays on getting the *season* wrong, which the site's best-time-to-visit sections genuinely solve. |

Every body is under 100 words on purpose — direct statement of what Kudozz is, the concrete benefit (real itineraries, honest budgets, zero sponsored placements), one link, a human sign-off, and the same compliance footer (opt-out + address) as every other cold template in this kit. Don't add more to these — the format's entire advantage is that it reads like something a person typed in under a minute.

For template 9, build a small merge list mapping each recipient's shown/inferred destination interest to a `{{DESTINATION}}` + `{{DESTINATION_URL}}` pair (e.g. Goa → `goa-travel-guide`, Rishikesh → `rishikesh-adventure-travel-guide`) — this is the single highest-leverage personalization in the whole kit, since it turns a generic cold email into "this was written for me."

## KPIs to track

| Metric | Healthy benchmark (travel/content niche) |
|---|---|
| Open rate | 35-45% (welcome), 20-30% (digest), 15-25% (win-back) |
| Click-through rate | 8-15% (welcome/announcement), 3-8% (digest) |
| Click-to-open rate | 20%+ is strong |
| Unsubscribe rate | keep under 0.5% per send |
| List growth vs. churn | net positive month over month |

Track click-through to the site specifically via the UTM params already built into every CTA — that's the number that answers "did this drive traffic."

Cold outreach runs on different benchmarks — don't judge templates 5-7 against the table above:

| Metric | Healthy benchmark (cold outreach) |
|---|---|
| Open rate | 20-35% (varies enormously by list quality and subject line) |
| Reply rate | 1-3% is good for the personal-note format — replies are the real signal that it's landing as human, not spam |
| Click-through | 2-6% |
| Complaint/spam rate | keep under 0.1% — this is the metric that can get you blacklisted, watch it closer than any other number here |
