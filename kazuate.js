// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log(kotae);

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

let c = document.querySelector('button#print');
c.addEventListener('click', hantei);



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="t"]');
let te = i.value;

  let yoso =0;
  yoso = Number(te);
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;
  //p0.textContent = kaisu;
  //p0.textContent = ("回目の予想:"+4);
  if(kaisu<4){
    span1.textContent = kaisu+ "回目の予想: ";
    span2.textContent = yoso;
    if(kotae===yoso){
      p0.textContent = ("正解です．おめでとう!");
    }
    else if(kaisu<yoso){
        if(kotae<yoso){
          p0.textContent = ("まちがい．答えはもっと小さいですよ"); 
        }
        else{
          p0.textContent = ("まちがい．答えはもっと大きいですよ");
        }
      }
    else if(kaisu===3){
      p0.textContent = ("まちがい．残念でした答えは "+kotae+" です．");
    }
  }
  else{
    span1.textContent = kaisu+ "回目の予想: ";
    span2.textContent = yoso;
      p0.textContent = ("答えは "+kotae+" でした．すでにゲームは終わっています");
  }
}
