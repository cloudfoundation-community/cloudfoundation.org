
export function doPost(e) {
  MailApp.sendEmail({
    to: "jdburger@meshcloud.io",
    subject: "call 123 example",
    htmlBody: JSON.stringify(e)
  });

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

export function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(); // get active spreadsheet
  var sheet = ss.getSheetByName('Feedback'); // get sheet by name from active spreadsheet

  if (!sheet){
    throw new Error("Could not find Feedback sheet");
  }

  var row : any[]= [];

  var date = new Date(); //create new date for timestamp

  row.push(date);
  // TODO: which page?
  row.push('Yes');
  row.push('This is just a test');

  //append the row to the active sheet
  sheet.appendRow(row);
}
