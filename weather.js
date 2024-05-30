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
let c = document.querySelector('button#print');
c.addEventListener('click', hantei);

function hantei(){
  let i = document.querySelector('input[name="t"]');
  let te = i.value;
  console.log = (te);
}





function sendRequest() {
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  let div = document.querySelector('div#result');	
div.textContent = "緯度: "+data.coord.lon;
div.textContent = "経度: "+data.coord.lat;

//div.textContent = "天気: "+data.weather.description);曇りがち

div.textContent = "最低気温: "+data.main.temp_min;
div.textContent = "最高気温: "+data.main.temp_max;
div.textContent = "湿度: "+data.main.humidity;
div.textContent = "風速: "+data.wind.speed;
div.textContent = "風向: "+data.wind.deg;
div.textContent = "都市名: "+data.name;
}
