const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=e9c4343247bc45c1e123876e465a9582`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    weatherIcon.src= `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.alt= weatherData.weather[0].description;
    captionDesc.textContent = weatherData.weather[0].description;
  }
  apiFetch();