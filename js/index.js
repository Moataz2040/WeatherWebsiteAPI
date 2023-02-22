let inputSearch = document.querySelector("#search");
let tWeather = document.querySelector("#tableWeather");
// current day
let cDate =document.querySelector("#currentDate");
let myCity = document.querySelector("#city");
let cNum = document.querySelector("#num");
let cImage = document.querySelector("#currentImage");
let cCondation = document.querySelector("#currentCondition");
// *****************
// second day
let sDate =document.querySelector("#secondDate");
let sImage = document.querySelector("#secondImage");
let sMaxTemp = document.querySelector("#secondMaxTemp");
let sMinTemp = document.querySelector("#secondMinTemp");
let sConditon = document.querySelector("#secondCondition");
// *****************
// third day
let thDate =document.querySelector("#thirdDate");
let thImage = document.querySelector("#thirdImage");
let thMaxTemp = document.querySelector("#thirdMaxTemp");
let thMinTemp = document.querySelector("#thirdMinTemp");
let thConditon = document.querySelector("#thirdCondition");
// *****************

async function getWeather(x){
    let myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6abb82e761b04ddaa9652431232102&q=${x}&days=3`);
    let final =await myResponse.json();
    // current day
    cDate.textContent=`${final.forecast.forecastday[0].date}`;
    myCity.textContent=`${final.location.name}`;
    cNum.innerHTML=`${final.current.temp_c} <span class="num-degree">o</span>C`;
    cImage.setAttribute("src",`${final.forecast.forecastday[1].day.condition.icon}`);
    cCondation.textContent=`${final.forecast.forecastday[1].day.condition.text}`;
    // *******************
    // second day
    sDate.textContent=`${final.forecast.forecastday[1].date}`;
    sImage.setAttribute("src",`${final.forecast.forecastday[1].day.condition.icon}`);
    sMaxTemp.innerHTML=`${final.forecast.forecastday[1].day.maxtemp_c} <span class="num-degree">o</span>C`;
    sMinTemp.innerHTML=`${final.forecast.forecastday[1].day.mintemp_c} <span class="num-degree">o</span>C`;
    sConditon.textContent=`${final.forecast.forecastday[1].day.condition.text}`;
    // ********************
    // third day
    thDate.textContent=`${final.forecast.forecastday[2].date}`;
    thImage.setAttribute("src",`${final.forecast.forecastday[2].day.condition.icon}`);
    thMaxTemp.innerHTML=`${final.forecast.forecastday[2].day.maxtemp_c} <span class="num-degree">o</span>C`;
    thMinTemp.innerHTML=`${final.forecast.forecastday[2].day.mintemp_c} <span class="num-degree">o</span>C`;
    thConditon.textContent=`${final.forecast.forecastday[2].day.condition.text}`;
}

inputSearch.addEventListener("input",function(){
    tWeather.classList.remove("d-none")
    let country = inputSearch.value;
    getWeather(country)
});
