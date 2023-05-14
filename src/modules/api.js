import { renderWeatherInfo } from "./dom";

const getWeather = async (input) => {
    try {
        let weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=d40a0fbc82784379ac2121158230305&q=${input}&aqi=no`, {
            mode: 'cors'
        });
        let weather = await weatherResponse.json();
        console.log(weather);
        console.log(weather.location.name);
        console.log(weather.current.condition.text);
        renderWeatherInfo(weather);
    } catch (error) {
        console.log(error)
    } 
}

export { getWeather };