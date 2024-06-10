let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let x = document.getElementById("h1");
x.remove();


let div = document.querySelector('div#result');	
let li1 = document.createElement('li');

let li2 = document.createElement('li');

let li3 = document.createElement('li');

let li4 = document.createElement('li');

let li5 = document.createElement('li');

let li6 = document.createElement('li');

let li7 = document.createElement('li');

let li8 = document.createElement('li');

let li9 = document.createElement('li');



let b = document.querySelector('button#print');
b.addEventListener('click', greeting);

// 2. イベントハンドラの定義
function greeting() {
	let i = document.querySelector('input[name="t"]');
	let t = i.value;
	console.log(t);
  if(t==='カイロ'){
    key=360630;
  }
  else if(t==='モスクワ'){
    key=524901;
  }
  else if(t==='ヨハネスブルク'){
    key=993800;
  }
  else if(t==='北京'){
    key=1816670;
  }
  else if(t==='東京'){
    key=1850147;
  }
  else if(t==='シンガポール'){
    key=1880252;
  }
  else if(t==='シドニー'){
    key=2147714;
  }
  else if(t==='ロンドン'){
    key=2643743;
  }
  else if(t==='パリ'){
    key=2968815;
  }
  else if(t==='リオデジャネイロ'){
    key=3451189;
  }
  else if(t==='ニューヨーク'){
    key=5128581;
  }
  else if(t==='ロサンゼルス'){
    key=5368361;
  }
  else if(t==='Cairo'){
    key=360630;
  }
  else if(t==='Moscow'){
    key=524901;
  }
  else if(t==='Johannesburg'){
    key=993800;
  }
  else if(t==='Beijing'){
    key=1816670;
  }
  else if(t==='Tokyo'){
    key=1850147;
  }
  else if(t==='Singapore'){
    key=1880252;
  }
  else if(t==='Sydney'){
    key=2147714;
  }
  else if(t==='London'){
    key=2643743;
  }
  else if(t==='Paris'){
    key=2968815;
  }
  else if(t==='Rio de Janeiro'){
    key=3451189;
  }
  else if(t==='New York'){
    key=5128581;
  }
  else if(t==='Los Angeles'){
    key=5368361;
  }
  else if(t==='エジプト'){
    key=360630;
  }
  else if(t==='ロシア'){
    key=524901;
  }
  else if(t==='南アフリカ'){
    key=993800;
  }
  else if(t==='中華人民共和国'){
    key=1816670;
  }
  else if(t==='中国'){
    key=1816670;
  }
  else if(t==='日本'){
    key=1850147;
  }
  else if(t==='オーストラリア'){
    key=2147714;
  }
  else if(t==='イギリス'){
    key=2643743;
  }
  else if(t==='フランス'){
    key=2968815;
  }
  else if(t==='ブラジル'){
    key=3451189;
  }
  else if(t==='アメリカ合衆国'){
    key=5128581;
  }
  else if(t==='アメリカ'){
    key=5128581;
  }
  console.log(key);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';


  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

  function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }


li1.textContent = "緯度: "+data.coord.lon;
div.insertAdjacentElement('beforeend', li1);

li2.textContent = "経度: "+data.coord.lat;
div.insertAdjacentElement('beforeend', li2);

li3.textContent = "天気: "+data.weather[0].description;
div.insertAdjacentElement('beforeend', li3);

li4.textContent = "最低気温: "+data.main.temp_min;
div.insertAdjacentElement('beforeend', li4);

li5.textContent = "最高気温: "+data.main.temp_max;
div.insertAdjacentElement('beforeend', li5);

li6.textContent = "湿度: "+data.main.humidity;
div.insertAdjacentElement('beforeend', li6);

li7.textContent = "風速: "+data.wind.speed;
div.insertAdjacentElement('beforeend', li7);

li8.textContent = "風向: "+data.wind.deg;
div.insertAdjacentElement('beforeend', li8);

li9.textContent = "都市名: "+data.name;
div.insertAdjacentElement('beforeend', li9);
  }
// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
  key=0;
}
  