# Privacy Policy — Apexlytics

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | support@ajwadtahmid.com |
| **Last updated** | October 3, 2026 |
| **App** | Apexlytics (`com.ajwadtahmid.apexlytics`) |

---

## Overview

Apexlytics is an independently developed app that provides Apex Legends
map rotation tracking, rank tracking, and alerts. It is not affiliated with or endorsed
by Electronic Arts or Respawn Entertainment.

This app does not require an account and does not ask for your name, email address, or
any other identity. The only player information it handles is the public in-game name or
numeric ID you choose to look up, described under "API Requests" below.

---

## Data Collected

### Crash & Error Reports
Collected via **Sentry** (sentry.io) on the Android and iOS apps only. (The desktop apps
send no crash reports.) When the app crashes or encounters an error, a report is sent
containing:
- Device type and model
- Operating system version
- App version
- The error itself, with a short trail of recent app events leading up to it

Before a report leaves your device, the app removes anything shaped like a player ID,
cuts error text down to its first line, and shortens it. The app is also written not to
put player names or IDs into this trail, and it does not attach your IP address, your
name, or any account (there isn't one). Crashes that happen inside the phone's native
layer (rather than in the app's own code) are reported by Sentry's own software, which
this scrubbing cannot reach: those reports may include an anonymous identifier that
Sentry's software generates for your installation of the app. It is not linked to your
name, to any account, or to any player ID, and it lets Sentry group reports that come
from the same installation.

Data is transmitted to Sentry via encrypted HTTPS connection. This data is used solely to identify and fix bugs. It is not sold or shared with any
third party beyond Sentry's infrastructure.

### API Requests
The app fetches Apex Legends game data (map rotations, ranked data, player stats) from a
proxy server operated by the developer. When you look up a player, or view your own
stats, the in-game name or numeric player ID and platform are sent to that server, which
forwards the request to [apexlegendsstatus.com](https://apexlegendsstatus.com) to fetch
public stats. These are public game identifiers, not account credentials.

Standard server logs may record:
- Your IP address
- Request timestamps
- Request type (e.g. map rotation, ranked data)

To decide which players' match history can be recorded, the server also keeps short-lived
records: which player IDs were recently looked up (up to about an hour), and how many
distinct devices requested each ID (up to 30 minutes). To keep usage fair, it also counts
how many different player IDs a device has asked it to record history for in the past
hour. Devices are counted using a salted one-way hash, and IP addresses are not stored in
these records.

So that repeat requests don't each cost a fresh request to the data provider, the server
also keeps a temporary copy of the match history it fetched for a player (up to 3 hours)
and of recent stats lookups (about a minute). These are public game statistics, kept only
in the server's temporary memory or cache, and expire on their own.

None of this is linked to your identity or shared with third parties beyond
apexlegendsstatus.com as described above. Server logs are deleted on a rolling 30-day
basis.

### Backups You Export
The backup feature creates a file that can contain your saved player names and IDs,
favourites, and match history. The app never uploads it. On Android and iOS the file is
handed to your device's share sheet, and you choose where it goes (for example Files or
a cloud drive you use); the app keeps a temporary copy only until the share finishes,
and removes it shortly afterwards (on Android this can take up to about ten minutes).
On desktop it is written to a folder you choose. Once you save it somewhere, it is
under that location's own privacy rules, not this app's.

### Data Stored On Your Device
The app stores the following **locally on your device only**, and never uploads it:
- Settings such as notification preferences, favourite maps, and alert timings
- Your saved player profiles (public name, ID, and platform) and favourite players
- Match history and rank-points history it records for those players over time
- Recently fetched game data, kept so the app works offline

This data stays until you use "Clear all data" in Settings or delete the app. On iOS,
your device's own iCloud or computer backups include app data by default, so this data
can be in those backups; you can turn that off for individual apps in your device's
backup settings. Android excludes the app from device backups.

---

## Background Activity

On iOS and Android, this app uses background fetch to periodically check for updated
map rotation data and fire scheduled notifications. This runs entirely using data from
the developer's proxy server and does not access any other device data or sensors while
running in the background.

---

## Notifications

If you grant notification permission, the app sends local notifications to alert you
before map rotations. These notifications are generated and scheduled entirely on your
device. No notification content is transmitted to any server.

---

## Third-Party Services

| Service | Purpose | Their Privacy Policy |
|---|---|---|
| Sentry (sentry.io) | Crash and error reporting | [sentry.io/privacy](https://sentry.io/privacy) |
| Apple App Store / Google Play | Checking whether a newer version of the app is available | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) / [policies.google.com/privacy](https://policies.google.com/privacy) |
| Apex Legends Status (apexlegendsstatus.com) | Source of the game data the proxy fetches, and of a few images the app loads directly | [apexlegendsstatus.com](https://apexlegendsstatus.com) |

On iOS and Android, the app checks its own App Store or Google Play listing directly from
your device to tell you when a newer version is available. The store provider receives
your device's IP address and the app's identifier (and may see your region and language
settings), as it would for any store request. This check does not go through the
developer's server and sends no player names or IDs.

Legend art, rank badges, weapons, and most map art are built into the app. A few images
are loaded directly from the data provider's servers instead: news images, and map art
for a map the app doesn't yet include. Loading them reveals your device's IP address and
which image was requested to the provider, but not who you are or any player you looked
up.

No advertising SDKs, analytics platforms, or social login services are used in this app.

---

## Data Retention

| Data | Retained By | Retention Period |
|---|---|---|
| Crash reports | Sentry | 90 days |
| Server request logs | Developer proxy server | 30 days (rolling) |
| Recently looked-up player IDs | Developer proxy server | Up to about 1 hour |
| Per-player-ID request counts (hashed) | Developer proxy server | Up to 30 minutes |
| Per-device hourly usage counts (hashed) | Developer proxy server | Up to 1 hour |
| Fetched match history (temporary copy) | Developer proxy server | Up to 3 hours |
| Recent stats lookups (temporary copy) | Developer proxy server | About 1 minute |
| Preferences, profiles, match and rank history, cached game data | Your device only | Until you clear it in Settings or delete the app (iOS device backups may also hold a copy) |

---

## Children

This app is not directed at children under the age of 13 and does not knowingly collect
data from children. The app content (Apex Legends) is rated Teen (13+).

---

## Your Rights

Because this app does not collect personally identifiable information and has no account
system, there is no personal profile to access, export, or delete.

If you would like any crash report data associated with your device removed from Sentry,
contact us and we will action the request within 30 days.

---

## Changes to This Policy

If this policy changes materially, the "Last updated" date at the top will be updated.
Continued use of the app after changes constitutes acceptance of the updated policy.

---

## Contact

For any privacy-related questions or requests:

**Email:** support@ajwadtahmid.com
**Privacy policies index:** https://ajwadtahmid.github.io/privacy-policies/
