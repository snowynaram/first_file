function onGeoOk(position){
const lat = position.coords.latitude;
const lng = position.coords.longitude;
console.log ("당신은", lat, lng);
}
function onGeoErr(){
    alert("날씨를 찾을수가 없어요 ㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)