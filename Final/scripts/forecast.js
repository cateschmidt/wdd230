const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=2e52b28e193c5dbda364e2b9891de906";

async function fetchForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            showForecast(data);
            console.log(data.list)
            console.log(data.list[1])
            console.log(data.list[3])
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}

fetchForecast();

function showForecast(weatherData) {
    document.querySelector(".temp-day1").textContent = weatherData.list[1].main.temp.toFixed(0);
    document.querySelector(".humidity-day1").textContent = `${weatherData.list[1].main.humidity}%`;
    document.querySelector(".icon-day1").src = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const ConditionD1 = weatherData.list[1].weather[0].description;
    document.querySelector(".desc-day1").textContent = ConditionD1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day2").textContent = weatherData.list[2].main.temp.toFixed(0);
    document.querySelector(".humidity-day2").textContent = `${weatherData.list[2].main.humidity}%`;
    document.querySelector(".icon-day2").src = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const ConditionD2 = weatherData.list[2].weather[0].description;
    document.querySelector(".desc-day2").textContent = ConditionD2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day3").textContent = weatherData.list[3].main.temp.toFixed(0);
    document.querySelector(".humidity-day3").textContent = `${weatherData.list[3].main.humidity}%`;
    document.querySelector(".icon-day3").src = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;
    const ConditionD3 = weatherData.list[3].weather[0].description;
    document.querySelector(".desc-day3").textContent = ConditionD3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');



}


