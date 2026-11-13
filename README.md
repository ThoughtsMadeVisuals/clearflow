# Clearflow

**Money Tracker** · see clearly where your money flows.

A personal tracker for bills and subscriptions, daily spending, credit cards, e-wallets and company expenses.

Your monthly budget is a water tank: bills and spending drain it, and money you pour into savings pools fills them toward a goal. Staying under your daily pace builds a flow streak, and every entry, on-pace day and pour earns drops that level you up from Puddle to Ocean, with badges along the way.

- Works offline once opened, and installs to your home screen like an app.
- No account, no server: all data is stored in your browser on that device only.
- Tap **+** to log spending, a bill or a company expense in a few taps. Tap any item to edit or delete it (deletes can be undone).
- Use **More → Settings & backup → Download backup** regularly, and **Restore** to move data to another device. Add a password when downloading to encrypt the backup file.

## Home balance
The Home balance is a flat sheet of brushed stainless steel with the water tank set into the middle. The tank drains as you spend. Tap the sheet to slide out a second steel sheet with the details: amount left, daily pace, breakdown and budget. The app remembers whether it's open.

## Privacy and security
- **PIN lock (optional):** Settings → Security → Set a PIN. You enter a 6-digit PIN on an on-screen keypad (the phone keyboard never opens). Your data is then encrypted on the device (AES-256-GCM, with a key derived from the PIN by PBKDF2-SHA256). The app locks after 5 minutes without use or 1 minute in the background, and wrong guesses are slowed down. A forgotten PIN can't be recovered, so keep a backup.
- **Encrypted backups:** add a password in the Download backup sheet. Restoring asks for it.
- **Delete all data:** Settings → Security → Delete all data on this device (also on the lock screen).
- Restored backups and imported CSVs are checked field by field before use. CSV exports escape text that spreadsheets would treat as formulas.
- The page sets a Content Security Policy that blocks all network requests from the app. If your host supports custom headers (Netlify, Cloudflare Pages), `_headers` adds `frame-ancestors`, `nosniff` and more. Encryption needs HTTPS (or `localhost`).

## Install on your phone
- **iPhone (Safari):** open the site → Share → Add to Home Screen.
- **Android (Chrome):** open the site → menu (⋮) → Install app / Add to Home screen.

## Updating the app
Edit the files, bump `VERSION` in `sw.js`, and push. Installed copies pick up the new version the next time they're opened online.
