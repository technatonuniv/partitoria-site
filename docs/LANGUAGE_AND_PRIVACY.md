# Website language and public wording

## Active commercial contract — 2026-10-01

Partitoria Studio remains the public display credit. All nine localized
homepages, Settings/Pro guide instructions and legal pages now describe the
approved standalone Google Play subscription contract. No public signup,
login, private licence invitation or account workflow is offered. Existing
closed-channel participants retain their privacy/deletion contact in a
separate historical disclosure; their backend and licences are unchanged.

Launch-in-preparation wording stays until the release executor records a real
public launch. The website has no checkout, account service or new tracking.
The one-calendar-month trial, four equal-feature periods, full USD/EUR totals,
local tax/price authority, cancellation/restoration, seven-day licence capped
by store expiry and permanent ownership guarantees share one content source.
Refresh is opportunistic: roughly 24 hours after the last check, the open app
can try again if network and Google Play are available. Successful daily or
background refresh is not guaranteed.

The active privacy describes installation identifier/public key, Play receipt,
app details, proof of key possession, Integrity and ordinary network metadata;
no PDF/library or card data reaches Partitoria. Encrypted receipts last during
access and 60 days after expiry, except unresolved purchase acknowledgements;
notification deduplication 32 days; completed challenges one day. Replaced-token
hashes, installation digests/sequences and voided-purchase records including
actual order identifiers/status currently have no fixed deletion period.
These records are not described as anonymous. A
30-day server-backup promise was removed because rotation is not verified.
Reconcile this with the deployed verifier before enabling purchases; update
all nine languages after any actual retention change.

Resend appears only in the disclosure for existing closed-channel users. Its
[official GDPR statement](https://resend.com/security/gdpr), checked 2026-10-01,
confirms US storage and 30-day email/log retention for ordinary plans.
[Google cancellation help](https://support.google.com/googleplay/answer/7018481),
checked the same day, confirms that uninstalling does not cancel a subscription.
The [Integrity overview](https://developer.android.com/google/play/integrity/overview)
describes app/device verification, not library processing or Partitoria signup.

Language negotiation, consent, storage duration and reset behavior below are
unchanged. Source edits and static checks do not establish deployment or
rendered-browser acceptance.

## Historical language and privacy checkpoints

The dated September descriptions below describe their original Free/private
release boundary. Their account-only/paid-unavailable assertions and backup
retention promise are superseded by the active contract above.

Reviewed 2026-09-27. The website public credit is **Partitoria Studio**, as
requested by the owner. This changes neither the Android package/signing
identity nor the GitHub account or store registration.

Unprefixed entry URLs detect the browser's primary language. Supported regional
tags such as pt-BR use their base language; unsupported languages use English.
Explicit translated URLs stay in their requested language. A manual language
selection takes priority on subsequent unprefixed visits. The URL retains the
article path, search and fragment during automatic negotiation.

The language menu explains that selection saves the preference for 180 days in
this browser. Only that explicit action writes `partitoria.language.v1` to
localStorage. There is no language cookie, tracking identifier or automatic
first-visit storage. The menu's browser-language action removes the preference;
expired choices are ignored. A URL language hint keeps manual links usable
when browser storage is disabled. Clearing site data also removes the choice.

This implements settings-based consent, not an assumption that localStorage
escapes storage rules. ICO guidance explicitly covers persistent language
preferences and permits explaining and obtaining agreement as part of the
setting itself. A separate visit-wide cookie banner adds no purpose here.
Source: [ICO: consent in practice](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/),
reviewed 2026-09-27. New analytics, advertising or third-party embeds require
their own review and must not reuse this language agreement.

Privacy text describes invitation-only testing in ordinary language. The dense
mail-delivery paragraph is removed from the main reading flow. A separate
expandable disclosure retains provider, retention and overseas-processing
facts; backend retention and data flows did not change.

## Public Free privacy clarification, 2026-09-30

All nine privacy translations now distinguish the public Free build from the
separate private OWNER build. Public Free has no Partitoria account, sign-in,
paid activation or purchase verification. Invitation, email delivery,
device/licence checks and account deletion/retention describe only private
OWNER access. New recording is described as an explicit advanced action in
the private build; existing owned audio remains free to play and export.

Explicit external searches send the query, IP address and User-Agent over
HTTPS. Independent archives may infer approximate location and retain logs
for aggregate analytics or security beyond the request. File import, export
and backup use Android's system file picker and ContentResolver, without a
cloud-storage SDK: the selected local or cloud provider controls file access,
transport and protection under its own terms. This is user-directed provider
access, not a library upload to Partitoria servers. The website adds no
analytics or new data flow, and private backend behaviour is unchanged.

The privacy effective date is 2026-09-30; support dates are unchanged. These
are prepared source changes, not evidence of public deployment. Local build
and static-verification results are recorded in the delivery handoff.

The guide's Settings account step, Pro access/expiry step and pilot access
labels now carry the same distinction in all nine languages: invitation and
Account apply only to the separate private OWNER build; the public Free build
has no accounts or sign-in. Existing instructions, article metadata, screenshots
and the explicit unavailability of public purchases remain. This clarification
uses source/metadata and locale-parity checks only; the release executor owns
the final combined website build, lint, static verification and deployment.

Verification: `node --test scripts/test-language.mjs` exercises first visits,
regional and unsupported languages, a persisted selection in a fresh context,
expiry, explicit URLs and storage failure. It is not browser rendering evidence.
