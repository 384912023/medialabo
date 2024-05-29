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
let div = createElement(li);
let div1 = document.querySelector('div#result');	
div1.insertAdjacentElement('beforeend', div);
div.textContent = "緯度: "+data.coord.lon;
div.textContent = "経度: "+data.coord.lat;

//div.textContent = "天気: "+data.;曇りがち

div.textContent = "最低気温: "+data.main.temp_min;
div.textContent = "最高気温: "+data.main.temp_max;
div.textContent = "湿度: "+data.main.humidity;
div.textContent = "風速: "+data.wind.speed;
div.textContent = "風向: "+data.wind.deg;
div.textContent = "都市名: "+data.name;