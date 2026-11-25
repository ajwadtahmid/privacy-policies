# Privacy Policy — BacklogForge

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | support@ajwadtahmid.com |
| **Last updated** | November 24, 2026 |
| **App** | BacklogForge (`com.ajwadtahmid.backlogforge`) |

---

## Overview

BacklogForge is an independently developed app that helps you track and manage your
video game backlog. It supports importing your Steam library, tracking play status,
logging completion, and viewing statistics about your game collection. It is not
affiliated with or endorsed by Valve Corporation.

This app does not require a dedicated account and does not collect personal information
such as your name, email address, or any form of identity beyond what is used for
optional Steam integration.

**In short:** your library, notes, ratings and settings are stored on your device only.
The app contacts a small number of services to do its job (Steam, the BacklogForge
backend, HowLongToBeat, and image servers for cover art), described below. There is no
analytics, advertising or crash reporting.

---

## Data Collected

### Steam Integration
Steam sign-in is optional. You can use the app as a guest, adding games by hand or
importing a backup file. In guest mode the app does not use Steam sign-in or the
BacklogForge backend and never sends a Steam ID anywhere; it still loads cover art and
HowLongToBeat estimates as described below.

If you choose to connect your Steam account, you sign in on Steam's own website. This
app never sees your Steam password or credentials. Steam returns the sign-in result
through a redirect on the BacklogForge backend's domain, which forwards it to the app
unchanged and stores nothing; the app then verifies the sign-in directly with Steam.

To import your library, the app sends your Steam ID to the BacklogForge backend (a
Cloudflare Worker). The backend adds the developer's Steam API key, requests your public
game library and playtime from Steam, and passes the response back to the app. The
backend does not store your Steam ID or your library. Your Steam ID is also saved locally
on your device, in the system's secure storage, until you sign out.

Cloudflare, which hosts the backend, keeps standard request logs that may record:
- Your IP address
- Request timestamps
- The requested URL, which includes your Steam ID

These logs are used only to operate and troubleshoot the service. This data is not linked
to your identity beyond your Steam ID and is not shared with third parties other than
Steam and Cloudflare as described here.

### Game Time Estimates (HowLongToBeat)
To show how long a game takes to beat, the app contacts howlongtobeat.com **directly from
your device**. When you sync with Steam, only games that do not yet have an estimate are
looked up. In guest mode, lookups happen only when you search for a game, add one, or use
Update Time to Beat. The requests contain the game's title (or whatever you type into
manual search) and HowLongToBeat's own game identifiers. Like any website,
HowLongToBeat can see your device's IP address and the generic browser identifier the app
sends. These requests do not pass through the BacklogForge backend and the developer does
not receive them. How HowLongToBeat handles them is governed by its own privacy policy.
The app stores a few non-personal technical values locally (the site's search token and
build identifier) to avoid repeating requests.

### Cover Art
Game covers are loaded **directly from your device** when they are shown:
- For Steam games, from Steam's content delivery network (`cdn.akamai.steamstatic.com`,
  operated for Valve), using the game's Steam app ID.
- For games you add by hand, from howlongtobeat.com.

Like any website, these servers can see your device's IP address and which cover is being
requested, and therefore which game is on your screen. These requests do not pass through
the BacklogForge backend and the developer does not receive them. Covers are kept in an
image cache on your device so they are not downloaded again; deleting the app removes the
cache.

### Fonts
The fonts the app uses are included in the app. Nothing is downloaded for them.

### Local App Data
Your game library, play status, notes, ratings, and settings are stored **locally on
your device only** using a local database and remain fully under your control. The only
parts of your library that leave your device through the app are the game titles used for
HowLongToBeat lookups, the game covers requested as described above, and your Steam ID
when you sync with Steam. Your notes, ratings, and play status are never transmitted by
the app.

The app also writes a diagnostic log (warnings and errors, for example a failed lookup)
to a file on your device. The app never uploads it; it stays on your device.

If you export your library, the file is saved where you choose; the app does not upload it.
Importing a backup reads a file you pick.

### Device Backups
"Your device only" describes what the app itself does. Your operating system may also
include the app's data in a device backup, if you have backups turned on:
- **Android:** Auto Backup can copy the app's local database and settings to your own
  Google account's backup. The Steam sign-in kept in secure storage is excluded, so after
  restoring on a new phone you sign in again.
- **iPhone and iPad:** an iCloud (or computer) device backup includes the app's data in
  the same way.

Those copies are created and held by Google or Apple under your account and your device's
backup settings. The developer cannot see or access them. You can turn backups off, or
delete the backup, in your device or account settings.

---

## Background Activity

This app does not run background tasks beyond what is required by the operating system for
normal app operation. While the app is open and you are signed in with Steam, it re-syncs
your library automatically (when your local library is empty and then every 2 hours),
which contacts the services described above. Nothing syncs while the app is closed, and no
syncing occurs unless you have signed in with Steam.

---

## Notifications

This app does not currently send push notifications. Any future notification feature
will be opt-in and will not transmit notification content to any server.

---

## Third-Party Services

| Service | Purpose | Their Privacy Policy |
|---|---|---|
| Steam (store.steampowered.com) | Game library import and sign-in | [store.steampowered.com/privacy_agreement](https://store.steampowered.com/privacy_agreement) |
| Steam content delivery network (cdn.akamai.steamstatic.com) | Cover art for Steam games, requested directly from your device | [store.steampowered.com/privacy_agreement](https://store.steampowered.com/privacy_agreement) (Valve's policy) |
| Cloudflare (cloudflare.com) | Hosts the backend that relays your Steam library request | [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/) |
| HowLongToBeat (howlongtobeat.com) | Game completion time estimates and cover art for games added by hand, requested directly from your device | [ign.com/privacy-policy](https://www.ign.com/privacy-policy) (the policy HowLongToBeat links to) |
| Google / Apple (device backup) | Only if you have device backups turned on; see Device Backups above | [policies.google.com/privacy](https://policies.google.com/privacy) · [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |

No advertising SDKs, analytics or crash-reporting platforms, or social login services beyond Steam are used in this app.

---

## Data Retention

| Data | Retained By | Retention Period |
|---|---|---|
| Server request logs | Cloudflare (backend host) | Per Cloudflare's log retention for the developer's plan; not exported or copied by the developer |
| Game title lookups | HowLongToBeat | Governed by HowLongToBeat's own policy |
| Cover art requests | Valve's content servers; HowLongToBeat (games added by hand) | Governed by their own policies |
| Game library & settings | Your device only | Until app is deleted. If your device backup is on, a copy may also exist in your Google or Apple backup until you delete that backup |
| Cover image cache | Your device | Until app is deleted |

---

## Children

This app is not directed at children under the age of 13 and does not knowingly collect
data from children. The app content (video game tracking) is suitable for general
audiences, but some tracked games may be rated for older audiences.

---

## Your Rights

Because this app does not collect personally identifiable information and has no account
system, there is no personal profile to access, export, or delete.

You can remove the data stored on your device yourself: **Settings → Clear All Data**
deletes your library and resets your settings, **Sign Out** removes the stored Steam ID,
and deleting the app removes everything (on desktop, also its data folder, which the
uninstaller may leave in place). A device backup copy, if you have one, is deleted in your
Google or Apple account or device settings. If you have questions about, or want to ask
for the removal of, any server request logs associated with your Steam ID, contact us and
we will respond within 30 days.

---

## Changes to This Policy

If this policy changes materially, the "Last updated" date at the top will be updated.
Continued use of the app after changes constitutes acceptance of the updated policy.

---

## Contact

For any privacy-related questions or requests:

**Email:** support@ajwadtahmid.com
**Privacy policies index:** https://ajwadtahmid.github.io/privacy-policies/
