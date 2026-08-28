/**
 * Jagdish Data Scientist Portfolio - Contact Form Backend
 *
 * 1) Create a Google Sheet.
 * 2) Put its ID below.
 * 3) Put your Gmail address below.
 * 4) Deploy this script as a Web App:
 *      Execute as: Me
 *      Who has access: Anyone
 * 5) Copy the /exec URL into index.html where it says:
 *      YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
 */

const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const NOTIFY_EMAIL = "jagdishsutyawanshi632005@gmail.com";
const SHEET_NAME = "Contact Responses";

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    const name = String(p.name || "").trim();
    const email = String(p.email || "").trim();
    const subject = String(p.subject || "").trim();
    const message = String(p.message || "").trim();

    if (!name || !email || !subject || !message) {
      return HtmlService.createHtmlOutput("Missing required fields.");
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([new Date(), name, email, subject, message]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "Portfolio Contact: " + subject,
      htmlBody:
        "<h3>New portfolio message</h3>" +
        "<p><b>Name:</b> " + escapeHtml_(name) + "</p>" +
        "<p><b>Email:</b> " + escapeHtml_(email) + "</p>" +
        "<p><b>Subject:</b> " + escapeHtml_(subject) + "</p>" +
        "<p><b>Message:</b><br>" + escapeHtml_(message).replace(/\n/g, "<br>") + "</p>"
    });

    return HtmlService.createHtmlOutput("OK");
  } catch (err) {
    return HtmlService.createHtmlOutput("ERROR: " + err.message);
  }
}

function escapeHtml_(text) {
  return text.replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[c];
  });
}
