let inputSearch = document.querySelector("#search");
let tWeather = document.querySelector("#tableWeather");
async function getWeather(x = "Alexandria"){
    // current day
let cDay =document.querySelector("#currentDay");
let cDate =document.querySelector("#currentDate");
let myCity = document.querySelector("#city");
let cNum = document.querySelector("#num");
let cImage = document.querySelector("#currentImage");
let cCondation = document.querySelector("#currentCondition");
// *****************
// second day
let sDay =document.querySelector("#secondDay");
let sImage = document.querySelector("#secondImage");
let sMaxTemp = document.querySelector("#secondMaxTemp");
let sMinTemp = document.querySelector("#secondMinTemp");
let sConditon = document.querySelector("#secondCondition");
// *****************
// third day
let thDay =document.querySelector("#thirdDay");
let thImage = document.querySelector("#thirdImage");
let thMaxTemp = document.querySelector("#thirdMaxTemp");
let thMinTemp = document.querySelector("#thirdMinTemp");
let thConditon = document.querySelector("#thirdCondition");
// *****************
// date
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d =new Date;
let day = d.getDay();
let month = d.getMonth();
let date = d.getDate();
// *******************
    let myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6abb82e761b04ddaa9652431232102&q=${x}&days=3`);
    let final =await myResponse.json();
    // current day
    cDay.textContent=`${days[day]}`;
    cDate.textContent=`${date+months[month]}`;
    myCity.textContent=`${final.location.name}`;
    cNum.innerHTML=`${final.current.temp_c} <span class="num-degree">o</span>C`;
    cImage.setAttribute("src",`${final.forecast.forecastday[1].day.condition.icon}`);
    cCondation.textContent=`${final.forecast.forecastday[1].day.condition.text}`;
    // *******************
    // second day
    sDay.textContent=`${days[day + 1]}`;
    sImage.setAttribute("src",`${final.forecast.forecastday[1].day.condition.icon}`);
    sMaxTemp.innerHTML=`${final.forecast.forecastday[1].day.maxtemp_c} <span class="num-degree">o</span>C`;
    sMinTemp.innerHTML=`${final.forecast.forecastday[1].day.mintemp_c} <span class="num-degree">o</span>C`;
    sConditon.textContent=`${final.forecast.forecastday[1].day.condition.text}`;
    // ********************
    // third day
    thDay.textContent=`${days[day + 2]}`;
    thImage.setAttribute("src",`${final.forecast.forecastday[2].day.condition.icon}`);
    thMaxTemp.innerHTML=`${final.forecast.forecastday[2].day.maxtemp_c} <span class="num-degree">o</span>C`;
    thMinTemp.innerHTML=`${final.forecast.forecastday[2].day.mintemp_c} <span class="num-degree">o</span>C`;
    thConditon.textContent=`${final.forecast.forecastday[2].day.condition.text}`;
}
getWeather()
inputSearch.addEventListener("input",function(){
    let country = inputSearch.value;
    getWeather(country)
});