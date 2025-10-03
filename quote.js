const kakugen_items = [
  "人生の問題を解決するには、まず針箱を整頓せよ（カーライル）",
  "常識とは、18歳までに身に付けた偏見のコレクションである（アインシュタイン）",
  "人はその制服どおりの人間になる（ナポレオン）",
  "神は水だけを造った。しかし人はワインを作った（ユーゴー）",
  "善にも強ければ、悪にも強いというのが、いちばん強力な性格である（ニーチェ）"
];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * kakugen_items.length );
  disp.innerHTML = kakugen_items[num];
});
