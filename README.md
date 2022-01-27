# スプレッドシートを使ったUnity向けの認証システム
Web上でUnityで作ったアプリケーションを使って実験を行うことを考えると，次のような工程になると思います　

- googleフォームとかで個人情報を入力してもらい，実験に同意してもらう

- Web上でUnityの実験タスクをやってもらい，ログやアンケート結果を収集する

このとき，入力してもらった情報と，実験のログを紐づけるためのシステムです．


## どうやって使うか

1. まずスプレッドシートのひな形とGoogleフォームをGoogle Driveからマイドライブにコピーする（マイドライブじゃないとオーナーが自分じゃないのでうまくいかない）．

2. googleフォームとシートを紐づけ（回答→スプレッドシートのマークを選択）

3. マイドライブにコピーしたスプレッドシートを開き，「ツール」から「スクリプトエディタ」を選択，DataTransfer_Unityのプロジェクトを選択して開く．

4.プログラム中の"xxxxxx"の部分をマイドライブのスプレッドシートのIDに置き換える．

5. 「公開」⇒「Webアプリケーションで...」を選択してURLを得る（アクセス権限はanyone, even anonymousにしとく．あと，２回目以降の公開では毎回Project Versionをnewにしないと変更が反映されないっぽいです...）

6. 3.と同様にマイドライブにコピーしたGoogleフォームを開き，「ツール」から「スクリプトエディタ」を選択，sendMailのプロジェクトを選択して開く．

7. 時計マークをクリックするとGASのプロジェクト編集画面に遷移する．右下の「トリガーを追加」を選択し，「イベントのソースを選択」から「フォームから」を選択．さらに，「イベントの種類を選択」から「フォーム送信時」を選択．（もしかしたら先に5.と同様にアプリケーションの公開が必要かも？？）．これでフォーム送信時に自動でメールが送信されるようになる．

8. Unityのプロジェクトを解凍，スクリプトのPwTransmitter.csの中の"URI"をさきほど発行したURLに書き換える．

9. プロジェクトをテスト実行してみる．入力フォームにスプレッドシートに記載されているパスワードを入力して，正しい参加者No.が返ってきたら成功！！！
