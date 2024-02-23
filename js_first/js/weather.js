
const API_KEY = "4889561e302f8d4489c0802a70067d07"

function onGeoOk(position){
const lat = position.coords.latitude;
const lng = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const location = document.querySelector("#weather span:last-child");
        const temp = document.querySelector("#temp span:first-child");
        const temphighlow = document.querySelector("#temp span:last-child");
        location.innerText = data.name;
        weather.innerText = data.weather[0].description;
        temp.innerText = `현재기온 : ${data.main.temp}`;
        temphighlow.innerText = `최고기온 : ${data.main.temp_max} 최저기온 : ${data.main.temp_min}`
        
});

}
function onGeoErr(){
    alert("위치정보를 찾을수가 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)