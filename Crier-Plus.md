# Privacy Policy — Crier Plus

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | support@ajwadtahmid.com |
| **Last updated** | June 20, 2026 |
| **App** | Crier Plus (`com.ajwadtahmid.crierplus`) |

---

## Overview

Crier Plus is an independently developed iOS app that speaks your reminders aloud using
your name and a custom message. It does not require an account, does not connect to the
internet, and does not collect personal information of any kind.

---

## Data Collected

### None.

Crier Plus does not collect, transmit, or share any data. There is no backend server,
no analytics platform, no crash reporting SDK, and no third-party SDK of any kind
included in this app.

---

## What Stays on Your Device

All app data is stored locally inside the app sandbox on your device only:

| Data | Where it lives | When it's deleted |
|---|---|---|
| Your name | Device storage (`UserDefaults`) | When app is deleted |
| Reminders (title, message, schedule) | Device storage (SwiftData) | When reminder is deleted or app is deleted |
| Audio files (`.caf`) | App sandbox (`Library/Sounds/`) | When reminder is deleted, edited, or app is deleted |
| Voice settings (rate, pitch) | Device storage (`UserDefaults`) | When app is deleted |

None of this data is ever transmitted off your device.

---

## Notifications

Reminders are scheduled as local notifications using iOS's built-in
`UNUserNotificationCenter`. All notification content (title, spoken audio) is generated
and stored on your device. No notification data is sent to any server.

You can revoke notification permission at any time in iOS Settings → Notifications →
Crier Plus.

---

## On-Device AI

The "AI Suggest" and "Tone Rewrite" features use **Apple Intelligence**
(FoundationModels framework), which runs entirely on your device. The reminder text
you enter is processed locally by Apple's on-device language model and never leaves
your phone. This feature is only active on iOS 26+ with Apple Intelligence enabled.

For Apple's own privacy information on Apple Intelligence, see:
[apple.com/privacy/ai](https://www.apple.com/privacy/features/)

---

## Third-Party Services

None. Crier Plus does not use any third-party SDKs, advertising networks, analytics
platforms, social login providers, or crash reporting services.

---

## Network Activity

Crier Plus makes zero network requests. It does not connect to the internet under any
circumstances.

---

## Children

This app does not target children and does not knowingly collect data from any user,
including children under 13. Because no data is collected at all, there is nothing to
delete upon request.

---

## Your Rights

Because Crier Plus collects no data and has no account system, there is no personal
profile to access, export, or delete. All data is stored locally on your device and
can be removed at any time by deleting the app.

---

## Changes to This Policy

If this policy changes materially, the "Last updated" date at the top will be updated.
Continued use of the app after changes constitutes acceptance of the updated policy.

---

## Contact

For any privacy-related questions or requests:

**Email:** support@ajwadtahmid.com  
**Privacy policies index:** https://ajwadtahmid.github.io/privacy-policies/
