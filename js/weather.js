const API_KEY = "f23ea4705d8bd8d6084f6a55b89d540e";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //당장 일어나지 않고 응답을 받은 뒤 then의 요청을 처리
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);