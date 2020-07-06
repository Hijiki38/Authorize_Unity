function myFunction(e) {

    // Googleフォームのレスポンスから必要なデータを取得する
    var itemResponse = e.response.getItemResponses();
    var email = e.response.getRespondentEmail();
    var name = itemResponse[0].getResponse();
    var gakuseki = itemResponse[1].getResponse();
    var id = MD5.MD5(gakuseki, true);

    // IDを本文に加えて、メールを送る
    var title = '【ID通知メール】';
    var content = [
        name+'さま．',
        ' ',
        '本日は静岡大学竹内研究室の実験にご協力いただき誠にありがとうございます',
        '次に，以下のURLをブラウザで開き実験課題を行ってください．',
        '本人確認のため，実験を受ける際には以下のIDを入力してください．',
      　'よろしくお願いいたします．',
        ' ',
        '【URL】https://sites.google.com/view/jikkenpage-test/%E3%83%9B%E3%83%BC%E3%83%A0', //ここに実験用URLを貼る
        '【ID】' + id,
    ].join('\n');
    GmailApp.sendEmail(email, title, content);

}
