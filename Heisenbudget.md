# Privacy Policy — Heisenbudget

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | support@ajwadtahmid.com |
| **Last updated** | November 4, 2026 |
| **App** | Heisenbudget (Android and iOS) |

---

## Overview

Heisenbudget is an independently developed personal expense and income tracker. It works
completely offline: it does not require an account, does not connect to the internet,
and does not collect personal information of any kind. Everything you enter is stored on
your phone. The app has no server of its own. Data can leave through files you choose to
export or share, or through your phone's own backup if it is switched on (see **Backup,
Restore, and Export** and **Phone Backups** below).

Heisenbudget is not affiliated with or endorsed by Breaking Bad, Better Call Saul, or
their owners.

---

## Data Collected by the Developer

### None.

The developer does not collect your app data. There is no backend server, analytics
platform, advertising or crash-reporting service. Files you choose to export or share
and your phone’s own backups are separate, as described below.

---

## What Stays on Your Device

All app data is stored locally inside the app's private storage on your phone:

| Data | Where it lives | When it's deleted |
|---|---|---|
| Transactions (amount, income or expense, date, category, optional title and note) | App database on your device | When you delete the transaction, use **Erase everything**, or delete the app |
| Categories (names and icons) | App database on your device | When you use **Erase everything** (custom ones can also be archived), or delete the app |
| Repeating transactions, favorites, and budget limits | App database on your device | When you delete them, use **Erase everything**, or delete the app |
| Savings goals (name, target amount, optional target date, icon, and their order, which is your priority) and the amounts you put into or take out of them, with their dates | App database on your device | When you delete them, use **Erase everything**, or delete the app |
| Settings (currency, theme, accent color, text font, wording style, opening balance, week and budget-month settings, whether your first favorite gets a home-screen shortcut, the category you used last, whether you have finished the welcome screen, the version of the data format, the date of your last backup, whether backup reminders are on and the day a reminder was postponed to, which month's end-of-month report you last opened, and any History filters you saved, with the names you gave them) | App preferences on your device | When you use **Erase everything**, or delete the app |
| A safety copy of the database, made only before an update that changes how the app stores data | A file in the app's private storage | On a later launch once at least 14 days old, when you successfully complete **Erase everything**, or when you delete the app |

The app does not upload this data. User-directed exports and OS backups are the
exceptions to local storage described below.

During recovery, temporary original database files, sidecars and a preference snapshot
can be kept in private storage until replacement succeeds or rollback finishes. If
recovery is interrupted, they remain available for retry. Both normal and Recovery
**Erase everything** attempt to remove these app-managed recovery copies too; if cleanup
fails, the app reports that it is incomplete and offers retry.

---

## Backup, Restore, and Export

Heisenbudget can create a backup file (JSON) or a spreadsheet file (CSV) of your data.
These files are created on your device and handed to your phone's own share sheet, where
**you** choose where they go (Files, a cloud drive, email, and so on). The app does not
send them anywhere itself. Once you send a file to another app or service, that app or
service's own privacy policy applies to the copy it receives.

You can also choose **Save to a folder**. The app then opens your phone's own save
dialog, you pick the folder and the file name, and the backup file is written there. The
app does not remember the folder you chose and never saves anything on its own.

Backup and CSV files are not encrypted: they are readable by whatever app or service you
send them to, so choose where they go with that in mind.

**Backup reminders.** If your last backup is more than 30 days old (or you have a fair
amount of data and have never made one), the Home screen shows a card suggesting a
backup. It is only a card inside the app: Heisenbudget sends no notifications and asks
for no permission. You can postpone it or turn it off in the app, and these choices are
kept only on your phone (they are not part of a backup file).

Temporary source files and, on Android, native sharing attachments are kept in private
cache with distinct names so a new export does not invalidate an earlier one. They
expire after about ten minutes while the app runs. Expired files are also cleaned on
launch or resume; closing the app can delay cleanup until it runs again. Both erase
paths attempt to clear fresh copies too. Cleanup can fail because of storage or platform
errors; **Erase everything** reports unfinished cleanup rather than claiming success.
Files saved or sent outside the app and older OS backups are not retracted by this
cleanup.

Selecting a share recipient records a backup action for reminders; it does not prove
that the recipient saved a durable copy. Cancelling sharing or an unavailable share
result does not reset reminders. **Save to a folder** records success only when the
platform save operation reports success.

To restore, you choose a backup file with your phone's file picker. The app can read
only the file you pick. Your phone's file picker may make a temporary copy of it while
you choose; the app asks the picker to clear its temporary copy once the file has been
read; provider/platform cleanup can fail. Both erase paths also attempt to clear the
app-managed Android picker cache. Other platform/provider copies follow their own
cleanup behavior, and externally managed copies are outside the app’s control. If the
file you pick is stored in a cloud drive, your phone's drive app may download it first;
that is done by that app, not by Heisenbudget.

---

After erasure, the app rebuilds unused database space and clears its database working
files to remove recoverable content from app-controlled storage. If cleanup cannot
complete, it reports that and offers retry. This is not a guarantee of physical flash
sanitization, nor does it delete OS or recipient-owned backup copies.

## Permissions

Heisenbudget does not request the internet permission, or access to your location,
contacts, camera, microphone, photos, or notifications (backup reminders are a card
inside the app, not a notification). It reads and shares files only through your phone's
own file picker and share sheet.

---

## Launcher Shortcuts

Heisenbudget can add shortcuts to your home screen's long-press menu (Add expense, Add
income, and the name of your first favorite). These are stored on your device by the
phone's launcher. If you name a favorite, that name appears in the shortcut. You can
turn the favorite shortcut off in the app's Favorites settings.

---

## Phone Backups (Google and iCloud)

Heisenbudget has no server or automatic upload service of its own. Your phone may have
its own backup switched on, and that backup can copy the app's data to your Google or
Apple account without Heisenbudget doing anything. This is how phones normally treat
every app, and it is on by default on many phones.

- **Android:** if Google's automatic backup is on in your phone's settings, Android can
  include Heisenbudget's data (your transactions and settings) in your Google account's
  backup, and restore it when you set up a new phone. This is handled by Google.
- **iPhone and iPad:** if iCloud Backup is on (or you back up to a computer), iOS includes
  Heisenbudget's data in that backup, and restores it onto a new device. This is handled by
  Apple.

What this means for you:

- The copy is stored and protected by Google or Apple under their own terms and privacy
  policies. The developer of Heisenbudget cannot see, read, change, or delete it.
- Heisenbudget has no setting that turns your phone's backup on or off. You can turn it off
  for your phone, or for individual apps where your phone allows it, in your phone's backup
  settings. Without it, the backup file you make yourself (see above) is how you move to a
  new phone.
- Successfully completed **Erase everything** clears app-managed data; deleting the app removes its private storage. If erase cleanup fails, follow the app’s retry instructions. Older copies in a
  Google or Apple backup stay there until that service replaces them with a newer backup, or
  you delete them in your Google or Apple account.
- A backup file you make in the app and send to Google Drive or iCloud Drive yourself is a
  separate thing: it goes only where you choose, and it is not encrypted.

---

## Third-Party Services

None. Heisenbudget does not use advertising networks, analytics platforms, social login
providers, or crash reporting services. Its fonts are bundled inside the app and are
never downloaded. The app is built with open-source software that runs entirely on your
device and does not collect data.

---

## Network Activity

Heisenbudget makes no network requests. It does not connect to the internet.

---

## Crash and Diagnostic Reports

Heisenbudget has no crash reporting of its own and sends nothing when something goes
wrong. If an unexpected error happens, app error handlers may write an event name and
exception type to the phone’s system log. They omit raw exception messages, stack
payloads and database bind values so transaction notes, titles and amounts are not
deliberately copied into these logs. OS crash collection is separate, as explained
below.

If you have turned on sharing of usage and diagnostics on your phone, Google (Android)
or Apple (iPhone and iPad) may collect crash reports from the operating system and show
the developer the crash details through Google Play Console or App Store Connect. This
is done by the operating system and the store under Google's or Apple's own policies,
not by Heisenbudget, and you can turn it off in your phone's settings. These reports
describe the crash itself (for example the device model, the system version and a
technical trace); Heisenbudget does not attach your transactions or notes to them.

---

## Children

This app does not target children and does not knowingly collect data from any user,
including children under 13. Because no data is collected at all, there is nothing to
delete upon request.

---

## Your Rights

Because Heisenbudget collects no data and has no account system, there is no personal
profile to access, export, or delete. Your data is on your device, under your control:
you can export it from the app at any time, and remove all of it with **Erase
everything** in Settings or by deleting the app.

---

## Changes to This Policy

If this policy changes materially, the "Last updated" date at the top will be updated.
Continued use of the app after changes constitutes acceptance of the updated policy.

---

## Contact

For any privacy-related questions or requests:

**Email:** support@ajwadtahmid.com  
**Privacy policies index:** https://ajwadtahmid.github.io/privacy-policies/
