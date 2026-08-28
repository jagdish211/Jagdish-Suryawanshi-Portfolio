# Contact Form Setup — Google Sheet + Email Notification

## What this version does

When a visitor clicks **Send Message** on your portfolio:

1. The form sends **Name, Email, Subject and Message** to Google Apps Script.
2. Google Apps Script saves the submission into a **Google Sheet**.
3. You receive an **email notification** at:
   `jagdishsutyawanshi632005@gmail.com`
4. The portfolio can still be opened directly from your local PC.
5. A small local browser backup is kept in `localStorage` on the browser where the form was submitted.

> Important: a browser cannot silently write a remote website submission into an `.xlsx` file on your Windows PC. The reliable setup is Google Sheet + email. You can download the Google Sheet as Excel (`.xlsx`) whenever you want.

## Step 1 — Create the Google Sheet

1. Open Google Sheets.
2. Create a blank spreadsheet, for example: **Jagdish Portfolio Contact Responses**.
3. Copy the Spreadsheet ID from the URL.

Example:

`https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit`

Copy only the ID.

## Step 2 — Create the Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**.
2. Delete the default code.
3. Open this folder:
   `google-apps-script/Code.gs`
4. Copy all of `Code.gs` into Apps Script.
5. Replace:

`PASTE_YOUR_GOOGLE_SHEET_ID_HERE`

with your real Spreadsheet ID.
6. Save the project.

## Step 3 — Deploy it

In Apps Script:

1. Click **Deploy → New deployment**.
2. Select **Web app**.
3. Set **Execute as:** Me.
4. Set **Who has access:** Anyone.
5. Click **Deploy**.
6. Allow the requested Google permissions.
7. Copy the Web App URL ending in `/exec`.

## Step 4 — Connect the portfolio

Open:

`index.html`

Find:

`YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`

Replace it with your `/exec` Web App URL.

Example:

`action="https://script.google.com/macros/s/XXXXXXXXXXXX/exec"`

Save the file.

## Step 5 — Test

Open `index.html` in Chrome.

Go to **Contact** → enter test details → click **Send Message**.

Check:

- Google Sheet → a new row should appear.
- Gmail → you should receive a notification.

## Excel

Your Google Sheet is the master storage. To get an Excel file:

**Google Sheets → File → Download → Microsoft Excel (.xlsx)**

The ZIP also contains:

`contact_submissions_template.xlsx`

This is only an Excel template; the browser should not directly write into a local `.xlsx` file because browsers block silent filesystem writes for security.

## Optional: local browser backup

The website also stores submissions in the browser's `localStorage`. This is only a local backup and is not a replacement for Google Sheets.

If you clear browser data or use another browser/computer, that local backup will not be there.

## Important

Do NOT put a Google account password, API key, service-account private key, or other secret inside `index.html`.

Google Apps Script handles the spreadsheet and email operation on Google's side.
