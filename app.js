const form = document.querySelector('form');
const searchVal = document.getElementById("searchVal");
const Name = document.getElementById("name");
const flag = document.getElementById("flag");
const temp = document.getElementById("temp");
const tempVal = document.getElementById("tempVal");
const description = document.querySelector(".description");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const Pressure = document.getElementById("Pressure");
const main = document.querySelector(".main");

const id = '6e97d6ea33b2fa4bb32c0a41a30f498b';
const searchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id + '&q=' + searchVal.value)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.cod == 200) {
                Name.innerText = res.name;
                flag.src = 'https://flagsapi.com/' + res.sys.country + '/shiny/32.png'
                temp.querySelector('img').src = 'http://openweathermap.org/img/wn/'+  res.weather[0].icon +'@4x.png';
                temp.querySelector('span').innerText = res.main.temp;
                description.innerText = res.weather[0].description;
                clouds.innerText = res.clouds.all + "%";
                humidity.innerText = res.main.humidity + "%";
                Pressure.innerText = res.main.pressure + "hpa"
            } else {
                main.classList.add("error");
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
        })
    searchVal.value = '';
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchVal.value != '') {
        searchWeather();
    }
})

const initWeather = () => {
    searchVal.value = 'uttar pradesh';
    searchWeather();
}
initWeather();