export function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  collectFeedback(body.page, body.answer, body.longAnswer);

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Insert the collected feedback into a Google Sheet.
 *
 * @param page The particular CFMM page that was visited.
 * @param answer Either 'yes' or 'no'.
 * @param longAnswer Optional long-text answer where a user can describe why they liked/disliked something.
 */
function collectFeedback(page: string, answer: string, longAnswer?: string) {
  const ss = SpreadsheetApp.getActiveSpreadsheet(); // get active spreadsheet
  const sheet = ss.getSheetByName('Feedback'); // get sheet by name from active spreadsheet

  if (!sheet){
    throw new Error("Could not find Feedback sheet");
  }

  const row: string[] = [];
  row.push(new Date().toISOString());
  row.push(page);
  row.push(answer);
  if (longAnswer) {
    row.push(longAnswer);
  }

  // append the row to the active sheet
  sheet.appendRow(row);
}
