// POSTメソッドで実行される
function doPost(e){
    //  パラメータでJsonを受け取り、パース
    const jsonString = e.postData.getDataAsString();
    const data = JSON.parse(jsonString);
    let pass = data.pass;

    // データを加工しありスプレッドシートを操作したり
  　var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  　var sheet = spreadsheet.getSheets()[1];
    const value = 0;
  　const values = sheet.getRange(2, 6, sheet.getLastRow() - 1).getValues().flat();
    
    var response = JSON.stringify({ message: "failed", userno: -1 });  
    var index = values.indexOf(pass);
  
    if(index >= 0){
      // レスポンスとしてJsonを返す
      response = JSON.stringify({ message: "succeeded", userno: index+1 });
    }/*else{
      response = JSON.stringify({ message: "failed" });
    }*/
    
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(response);
    return output;
}