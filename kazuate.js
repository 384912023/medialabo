// 答え
let kotae = Math.floor(Math.random()*10) + 1;
let span1 = document.querySelector('span#kaisu');	
let span = document.querySelector('span#answer');	
let p = document.createElement('p');
let p1 = document.createElement('p');
p.textContent = "";
span.insertAdjacentElement('beforeend', p);
p1.textContent = "";
// 入力回数（予想回数）
let kaisu = 0;
span1.insertAdjacentElement('beforeend', p1);

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let seikai=0;
  kaisu=kaisu+1;
  p1.textContent = kaisu;
  p.textContent = ("回目の予想:"+4);
  if(kaisu<4){
    if(kotae===4){
      p.textContent = ("正解です．おめでとう!");
        if(kaisu<3){
            kaisu=4;
        }
      }
      if(kaisu<3){
          if(kotae<4){
            p.textContent = ("まちがい．答えはもっと小さいですよ"+kotae);
          }
          else{
            p.textContent = ("まちがい．答えはもっと大きいですよ"+kotae);
          }
      }
      else{
        p.textContent = ("まちがい．残念でした答えは "+kotae+" です．");
      }
    }
    else{
        p.textContent = ("答えは "+kotae+" でした．すでにゲームは終わっています");
    }
}