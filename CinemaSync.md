---
title: "Privacy Policy — CinemaSync"
description: "Privacy policy for CinemaSync."
policy: true
app: "CinemaSync"
summary: "Movie and TV show tracking, stored on your device"
platforms: "Android · iOS"
updated: "November 17, 2026"
---

# CinemaSync Privacy Policy

| | |
|---|---|
| **Developer** | Ajwad Tahmid |
| **Contact** | support@ajwadtahmid.com |
| **Last updated** | November 17, 2026 |
| **Applies to** | CinemaSync 1.0 for Android and iOS |

CinemaSync is an independent app for keeping track of the films and shows you watch.
It is not affiliated with or endorsed by The Movie Database (TMDB), JustWatch, Apple or Google.

## The short version

- **No account.** There is nothing to sign up for, and the developer runs no server that holds your library.
- **Your library stays on your phone.** Your watch status, ratings, dates, notes, lists and settings are stored on your device only.
- **No analytics, no crash reporting, no advertising, no tracking.** The app contains none of these.
- **The app talks to the internet only to look up films and shows** and to show their artwork. What those requests reveal is listed below.
- **You control your data.** You can export it, restore it, or delete it all from inside the app.

## What is stored on your device

All of this lives in the app's private storage and is never sent to the developer.

| What | Details |
|---|---|
| Your library | Titles you add, with status (watchlist, watching, watched, dropped), rating, favourite, private notes, the title and year, and the dates you watched. |
| Episode progress | Which episodes of a show you have marked as watched. |
| Lists | Your custom lists, their titles and any notes you write on items. |
| Dismissed suggestions | Titles you chose never to see again, or to skip for a while. |
| Settings | Your region, the streaming services you chose, view and sort choices, the language, backup reminder preferences, and an optional custom proxy address. |
| Recent searches | Your last 10 search terms, which you can clear. |
| Saved film and show details | Titles, descriptions, cast, genres, posters' addresses and streaming availability fetched from TMDB, so pages work offline. These are refreshed or deleted within 6 months of being fetched. |
| Artwork | Posters and backdrops, saved on disk for up to 30 days and capped at about 600 files. |
| Internal safety copies | Before a restore, an import or an undo, the app makes a copy of its own database in its private folder and keeps the six most recent. They are never uploaded. |
| Import staging | While you import a Letterboxd or IMDb file, the rows from the file are held on the device until the import is finished, discarded or deleted. |

The database is protected by your phone's app sandbox and, if you use one, your screen lock and device encryption. CinemaSync does not add its own encryption on top. The app stores no passwords, access tokens or other secrets.

## What leaves your device

CinemaSync contacts only the places below, and only when you use a feature that needs them.

### 1. The catalog proxy (finding titles)

Searching, opening a title or person, Discover, For You, streaming availability, and matching titles during an import all fetch data about films and shows. These requests go to a small proxy operated by the developer on Cloudflare Workers, which adds the credential needed to ask TMDB and passes the answer back.

The proxy receives:
- your **IP address**, as every internet service does, while the request is in transit;
- the **request itself**: for example a search term, a title or person number, a genre, your chosen region code when listing streaming services, and the app language;
- during an **import**, the **title text, release year or IMDb id** of each row in your file, one request per distinct title.

The proxy does **not** receive your library, ratings, watch dates, notes, reviews, list names or any identifier of you or your device. It sets no cookies. Its configuration has logging and storage turned off and it keeps nothing, so nothing is available for the developer to look up afterwards. Cloudflare, as the company that runs the network, handles the IP address in order to deliver the request, and may apply network-level abuse protection such as rate limiting that it evaluates itself; the developer does not store its results. See Cloudflare's privacy policy.

The proxy forwards to TMDB **without** your IP address or any information about your device. TMDB sees the proxy, and the catalog query.

You can point the app at a different proxy under Settings, Advanced. If you do, whoever runs that proxy receives the requests described here, and this policy does not cover them.

### 2. TMDB's image server (artwork)

Posters, backdrops and logos are loaded **directly from TMDB's image server** (`image.tmdb.org`). It can see your **IP address** and **which images are requested**, which can reveal which titles you looked at. The app asks for the smallest size that fits and saves the images for up to 30 days. See TMDB's privacy policy.

### 3. YouTube (trailers)

Nothing contacts YouTube until you tap a trailer. The trailer then opens in the YouTube app or your browser, where YouTube's and Google's terms and privacy policy apply. CinemaSync embeds no player and loads no YouTube thumbnails.

### 4. Files you choose

When you export a backup or an import report, the app hands the file to your phone's save or share sheet. **You choose where it goes**, and the app keeps no hidden copy. When you restore or import, you choose the file in your phone's file picker and the app reads only that file. CinemaSync asks for no storage permission.

### Where streaming information comes from

Streaming availability is supplied through TMDB by JustWatch. CinemaSync does not receive or share any information about you with JustWatch.

### What CinemaSync does not do

- It does not collect analytics, usage statistics or crash reports, and contains no advertising or tracking software.
- It does not create accounts, profiles or user identifiers.
- It does not use your location, contacts, camera, microphone or photos.
- It does not use your data, or TMDB's data, to train or run machine learning or AI models. Suggestions in For You are a fixed scoring rule on your own library and the titles' genres, cast and ratings, calculated on your phone.
- It does not sell or share your data, because the developer never has it.

## Permissions

The app requests network access, and nothing else.

## Backups you make, and your phone's backups

A CinemaSync backup file is **plain text** and includes your private notes. Keep it somewhere you trust. It never contains secrets and it is never created without you asking.

Your phone's own backup service (iCloud, or Google's backup on Android) may include the app's data, including your library, if you have device backup turned on. That is controlled in your system settings, and Apple's or Google's privacy policy applies to it.

## Your choices and rights

Because the developer holds none of your data, there is nothing on the developer's side to access, correct or delete. You can act on everything yourself:

- **See and take your data:** Settings, Backup and restore, Export backup.
- **Clear recent searches:** in the search screen.
- **Delete everything:** Settings, Backup and restore, Delete all local data. It lists what goes, offers a backup first, and needs you to type a confirmation. It removes your library, lists, settings, saved details, artwork, import staging and internal safety copies from the device. It changes nothing at TMDB.
- **Uninstalling the app** removes its data from the device. Backup files you saved and any device backups are kept by you or your phone provider until you delete them.

If you are in a place with data protection law such as the EU, the UK or California, the rights it gives you (to access, correct, delete, port, object, or complain to an authority) apply in the same way, and the tools above are how you exercise them for data on your device. For anything else, contact support@ajwadtahmid.com and you will get a reply within 30 days.

## Children

CinemaSync is not directed at children under 13 and does not knowingly collect data from anyone. It shows information about films and shows, some of which are rated for mature audiences.

## Changes to this policy

If the app starts to send anything new off your device, this policy will be updated first and the app will tell you before you use the feature. The "Last updated" date above changes with every revision, and earlier versions are kept in the project's history.

## Credits

This product uses the TMDB API but is not endorsed or certified by TMDB. Streaming availability data is provided by JustWatch through TMDB.

## Contact

**Email:** support@ajwadtahmid.com
