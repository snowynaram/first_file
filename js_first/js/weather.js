
const API_KEY = "4889561e302f8d4489c0802a70067d07"

function onGeoOk(position){
const lat = position.coords.latitude;
const lng = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const location = document.querySelector("#weather span:last-child");
        const temp = document.querySelector("#temp span:first-child");
        location.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
});

}
function onGeoErr(){
    alert("날씨를 찾을수가 없어요 ㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)