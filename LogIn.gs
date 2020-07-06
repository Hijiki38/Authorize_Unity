// POSTで実行
function doPost(e){
    //  パラメータでJsonを受け取り、パース
    const jsonString = e.postData.getDataAsString();
    const data = JSON.parse(jsonString);
    let pass = data.pass;

    // スプレッドシート上のパスワード検索
  　var spreadsheet = SpreadsheetApp.openById('1QFBX6_iffW5Y_gsbrZSCoM-guW6zKXs8K9o-RV7Y2E4'); //ここを自分のスプレッドシートのIDに変える（https://docs.google.com/spreadsheets/d/xxxxxxx/edit...のxxxxxxの部分）
  　var sheet = spreadsheet.getSheets()[1];
    const value = 0;
  　const values = sheet.getRange(2, 6, sheet.getLastRow() - 1).getValues().flat();
    
    var response = JSON.stringify({ message: "failed", userno: -1 });  
    var index = values.indexOf(pass);
  
    if(index >= 0){
      // 一致するパスワードあればsucceededを返す
      response = JSON.stringify({ message: "succeeded", userno: index+1 });
    }/*else{
      response = JSON.stringify({ message: "failed" });
    }*/
    
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(response);
    return output;
}
