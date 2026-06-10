# Privacy Policy — CinemaSync

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | contact@ajwadtahmid.com |
| **Last updated** | June 9, 2026 |
| **App** | CinemaSync (`com.ajwadtahmid.cinema_sync`) |

---

## Overview

CinemaSync is an independently developed app for tracking movies and TV shows you have
watched, rating them, and discovering new titles to watch with a buddy. It is not
affiliated with or endorsed by The Movie Database (TMDB), Apple, or Google.

An account is required to use the app. Sign-in is via a one-time email code — no
password is created or stored.

This policy describes what data is collected, where it is stored, and what rights
you have over it.

---

## Data Collected and Why

### Account Data
When you create an account, the following is stored on our servers (Supabase):

| Data | Purpose |
|---|---|
| Email address | Sign-in only. Used to send your one-time login code. |
| User ID (UUID) | Internal identifier that links your data together. |
| Display name | Optional. Shown to your buddy in the pairing feature. |
| Account creation date | Account management. |

Your email address is handled by Supabase's authentication service. It is not used
for marketing and is never shared with third parties beyond what is necessary to
deliver the login code.

### Watch History & Ratings
When you mark a title as watched or add a rating, the following is stored:

- **On your device** (local SQLite database): TMDB title ID, media type (movie/TV),
  your rating (optional, 0.5–10 scale), and the date you watched it.
- **On our servers** (Supabase): The same data, synced to your account so it persists
  across devices and restores after reinstall.

The TMDB catalog itself (title names, posters, descriptions) is never stored on our
servers. Only your own records keyed by TMDB's numeric IDs are stored.

### Lists (Watch Later & Custom Lists)
List names, list items (TMDB IDs + media types), optional per-item notes you write,
and sort preferences are stored both on your device and synced to our servers.

### Swipes & Matches (Buddy Feature)
When you use the pairing (buddy) feature:

- A **pairing record** is created linking your account to your buddy's, along with
  any genre/year/runtime filters you set together.
- Your **swipe decisions** (right/left/ignore on titles) are stored per pairing.
- **Matched titles** (both users swiped right) are stored and shown in a shared list.
- Swipe data is used solely to compute matches and is not used for any other purpose.

### Push Notification Tokens
If you grant notification permission, your device's FCM (Firebase Cloud Messaging)
token is stored on our servers, linked to your account. This token is used only to
deliver "It's a match!" and pairing-related push notifications. It is not used for
advertising or shared with third parties beyond Firebase's infrastructure.

### TMDB Account Connection (Optional Import)
If you choose to connect your TMDB account to import your existing ratings and
watchlist, your TMDB access token is stored **on your device only** in the operating
system's secure keychain (iOS Keychain / Android Keystore). It is never transmitted to
or stored on our servers. The import is a one-time read operation — nothing is written
back to your TMDB account.

### Crash & Error Reports
Collected via **Firebase Crashlytics** (Google). When the app crashes or encounters
an unhandled error, Crashlytics automatically sends a report containing:

- Device model and OS version
- App version
- A stack trace and app state snapshot at the time of the error

This data is used solely to identify and fix bugs. It is not used for advertising or
sold. See Google's privacy policy for how Firebase handles this data.

### Local App Preferences
The following preferences are stored **on your device only** and are never transmitted
to any server:

| Preference | What is stored |
|---|---|
| Theme | Light / dark / system |
| Watch provider region | Your selected streaming region (e.g. "US") |
| Recent searches | Last few search queries, for convenience |
| Episode progress | Which episodes you have marked watched per TV season |
| Avatar colour | Your chosen profile colour |
| Onboarding status | Whether you have seen the intro screen |

---

## Third-Party Services

| Service | Purpose | Their Privacy Policy |
|---|---|---|
| Supabase (supabase.com) | Account, sync, and backend | [supabase.com/privacy](https://supabase.com/privacy) |
| Firebase Crashlytics (Google) | Crash and error reporting | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| Firebase Cloud Messaging (Google) | Push notifications | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| The Movie Database (TMDB) | Movie and TV metadata | [themoviedb.org/privacy-policy](https://www.themoviedb.org/privacy-policy) |

TMDB API requests are routed through a developer-operated proxy (Supabase Edge
Function) so that the TMDB API key is never exposed in the app. Standard server logs
on this proxy may record your IP address and request timestamps; these logs are not
linked to your identity and are deleted on a rolling 30-day basis.

No advertising SDKs or third-party analytics platforms are used in this app.

---

## Data Retention

| Data | Stored by | Retention |
|---|---|---|
| Account & watch history | Supabase (developer) | Until you delete your account |
| Crash reports | Firebase Crashlytics | 90 days |
| TMDB proxy server logs | Developer | 30 days (rolling) |
| TMDB access token | Your device's secure keychain | Until you disconnect or delete the app |
| Local preferences & cache | Your device only | Until you delete the app |

---

## Your Rights

CinemaSync provides built-in tools for your privacy rights:

- **Export your data** — Profile → Your data → Export my data. Downloads a JSON
  file of your full account data (watch history, ratings, lists, matches).
- **Delete your account** — Profile → Danger zone → Delete my account. Permanently
  and irreversibly deletes your account and all associated data from our servers.
  This cannot be undone. Local data on your device is cleared when you uninstall the
  app.

If you need to exercise a privacy right that is not covered by the in-app tools
(such as requesting a data correction or raising a concern), contact us at
contact@ajwadtahmid.com and we will respond within 30 days.

---

## Data Security

All data in transit between the app and our servers is encrypted via HTTPS/TLS.
Data at rest in Supabase is encrypted at the storage level. Your TMDB access token
is stored in the device's hardware-backed secure enclave where supported.

Row-Level Security policies on our database ensure that each user can only access
their own data. Supabase authentication tokens are short-lived and refreshed
automatically.

---

## Children

This app is not directed at children under the age of 13 and does not knowingly
collect data from children. The app content (movies and TV shows) may include
titles rated for mature audiences.

---

## Changes to This Policy

If this policy changes materially, the "Last updated" date at the top will be updated.
For significant changes, we will make reasonable efforts to notify users in-app.
Continued use of the app after changes constitutes acceptance of the updated policy.

---

## Contact

For any privacy-related questions or requests:

**Email:** contact@ajwadtahmid.com  
**Privacy policies index:** https://ajwadtahmid.github.io/privacy-policies/
