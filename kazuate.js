// 答え
let kotae = Math.floor(Math.random()*10) + 1;

let span1 = document.querySelector('span#kaisu');	
let span2 = document.querySelector('span#answer');	
let p0 = document.querySelector('p#result');	

//let p1 = document.createElement('p');
//let p2 = document.createElement('p');
//span1.insertAdjacentElement('afterend', p1);
//span2.insertAdjacentElement('beforeend', p2);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let c1 = document.querySelector('#print');
c1.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  Number(t);
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;
  //p0.textContent = kaisu;
  //p0.textContent = ("回目の予想:"+4);
  if(kaisu<t){
    span1.textContent = kaisu;
    span2.textContent = t;
    if(kotae===t){
      p0.textContent = ("正解です．おめでとう!");
    }
    else if(kaisu<t){
        if(kotae<t){
          p0.textContent = ("まちがい．答えはもっと小さいですよ"+kotae); 
        }
        else{
          p0.textContent = ("まちがい．答えはもっと大きいですよ"+kotae);
        }
      }
    else{
      p0.textContent = ("まちがい．残念でした答えは "+kotae+" です．");
    }
  }
  else{
    span1.textContent = kaisu;
    span2.textContent = t;
      p0.textContent = ("答えは "+kotae+" でした．すでにゲームは終わっています");
  }
}
