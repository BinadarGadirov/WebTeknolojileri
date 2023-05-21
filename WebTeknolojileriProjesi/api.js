const url = 'https://api.openweathermap.org/data/2.5/';
const key ='cef6377b7aa0cf61622afc042631458f';

const serQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
// verileri API ile cekme
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = `Durum: ${result.weather[0].description}`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `Min: ${Math.round(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)}°C`
}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',serQuery)