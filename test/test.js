document.writeln("test.jsに書かれたJavaScriptの文書<br><br>");

//constで宣言したオブジェクトはイミュータブル
const PI = 3.14;
const radius = 2;
document.writeln("constで円周率と半径を宣言して円の面積を計算<br>");
document.writeln("PI = " + PI + "<br>");
document.writeln("radius = " + radius + "<br>");
document.writeln("Area = " + radius * radius * PI + "<br><br>");

//letはミュータブル
document.writeln("letで変数xを宣言して10を代入したのち、100を再代入<br>");
let x = 10;
document.writeln("x = " + x + "<br>");
x = 100;
document.writeln("x = " + x + "<br><br>");

//関数を宣言する方法
document.writeln("関数を使って3 + 5を計算<br>");
tashizan(3, 5);

function tashizan(num1, num2) {
  const result = num1 + num2;
  document.writeln(result);
}

//JavaScriptでHTMLの中身を取り出す
alert(document.getElementById("first").innerHTML);

//JavaScriptでHTMLの中身を書き換える
document.getElementById("second").innerHTML = "書き換えました";

//HTML側のボタンが押されたとき、確認メッセージを表示
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("送信してよろしいですか？");
});
