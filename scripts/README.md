# Campaign sender — `send-campaign.js`

Sends the plain-text "09" template (`email-templates/09-plaintext-destination-checklist.txt`) to everyone in `scripts/input.csv`, skipping anyone already logged in `scripts/sent_mails_09.csv`, via nodemailer. Every successful send is appended to that log — so re-running the script after an interruption is always safe, it never double-sends.

`input.csv` only needs an email and a name. Two independent layers of randomness make each send look different:

- **Destination** — picked at random, per recipient, from a 10-place list hardcoded in the script (`DESTINATIONS` near the top of `send-campaign.js`).
- **Wording** — the template itself (`email-templates/09-plaintext-destination-checklist.txt`) defines 5 variants each for the subject line, opening line, brand-description line, and closing link line. The script randomly picks one of each, per recipient. That's 5×5×5×5×10 = 31,250 possible emails — deliberately, since identical bulk content is itself a spam-filter signal on top of everything else.

## Setup

1. `cp scripts/.env.example scripts/.env` and fill in real credentials (Gmail App Password or any SMTP provider — see the file for both options).
2. Edit `scripts/input.csv` — replace the example rows with real recipients. Just two columns:

   | Column | Used for |
   |---|---|
   | `email` | recipient address, and the dedupe key against `sent_mails_09.csv` |
   | `name` | `{{FIRST_NAME}}` — the first word of `name` is used, so "Jane Doe" greets as "Hi Jane," |

3. Edit the `DESTINATIONS` array in `send-campaign.js` if you want a different set of 10 (or more/fewer) places — each entry is `{ name, url }`, filling `{{DESTINATION}}` / `{{DESTINATION_URL}}`. Currently: Manali, Uttarakhand, Kerala, Goa, Udaipur, Meghalaya, Rishikesh, Ladakh, Srinagar, Darjeeling — all verified against real, live guide URLs on the site.
4. Edit the `SUBJECT`/`FIRST LINE`/`SECOND LINE`/`BLOG LINE` sections in `email-templates/09-plaintext-destination-checklist.txt` if you want different wording variants — add, remove, or reword lines freely, the count doesn't have to stay at exactly 5 per section.

## Run it

```
# ALWAYS preview first — prints every rendered email to the console, sends nothing
node scripts/send-campaign.js --dry-run

# Send for real
node scripts/send-campaign.js

# or, via package.json:
npm run send:campaign

# Send only the next 25 (recommended for warm-up — see email-templates/README.md)
node scripts/send-campaign.js --limit=25
```

Other flags: `--input=path/to/other.csv`, `--sent-log=path/to/other_sent.csv`, `--template=path/to/other-template.txt` — lets you reuse this same script for a different list or a different template. It auto-detects which of the two supported template shapes a file uses: variant-based (`SUBJECT 1:`, `SUBJECT 2:`, ... — like 09) or single-subject (`SUBJECT:` / `ALT SUBJECT 1:` — like `08-plaintext-checklist-hook.txt`, `10-plaintext-what-is-kudozz.txt`, `11-plaintext-timing-hook.txt`, none of which use `{{DESTINATION}}` — the random destination pick is simply ignored by those).

## What happens on each run

1. Loads `scripts/.env` (falls back to a repo-root `.env` if present).
2. Reads `scripts/sent_mails_09.csv` and builds a set of already-emailed addresses.
3. Reads `scripts/input.csv` top to bottom. For each row:
   - Skips it if the email is invalid, or already sent (this run or a previous one).
   - Picks one random entry from `DESTINATIONS`.
   - Picks one random subject, opening line, brand-description line, and closing link line from the template's variant sections, and assembles them into the final email with that row's name and the picked destination.
   - Sends via nodemailer, waits `SEND_DELAY_MS` (default 3000ms) before the next one.
   - On success: appends `email, name, destination, subject, sentAt, status` to `scripts/sent_mails_09.csv` — including which destination and which exact subject that recipient got, so you can see the distribution afterward.
   - On failure (bad address, SMTP error, etc.): appends the error to `scripts/failed_mails_09.csv` instead, and keeps going — one bad row never stops the run.
4. Prints a summary: how many sent, skipped, failed.

## Files this creates

- `scripts/sent_mails_09.csv` — the send log / dedupe source. Don't delete this between runs, or already-emailed recipients will get a duplicate.
- `scripts/failed_mails_09.csv` — only created if a send fails. Fix the underlying issue (bad address, SMTP auth, etc.) and re-run the same command — failed rows aren't in the sent log, so they'll be retried automatically.

Neither file is committed to git (see `.gitignore`) — both contain real recipient data.

## Before sending at real volume

This reuses the exact deliverability guidance from `email-templates/README.md` — worth re-reading before your first real send:

- Confirm SPF, DKIM, and DMARC are set up on the sending domain.
- Send from a real person's address (`arjun@kudozz.in`), not `newsletter@`/`noreply@` — already the default in `.env.example`.
- Start small with `--limit=25` and increase gradually over 1-2 weeks rather than blasting the full list on day one.
- Only email addresses with a legitimate source (see the compliance section in `email-templates/README.md`) — this script enforces good hygiene (dedupe, error isolation, pacing) but can't fix a bad list.
- **Template 09's assembled email no longer includes a postal address or unsubscribe link** (removed by request — it now ends at the "Kudozz Club" sign-off). CAN-SPAM (US) and similar laws elsewhere require both in commercial email, so sending this template at volume without them is a real compliance risk, not just a style choice.
