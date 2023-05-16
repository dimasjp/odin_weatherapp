import errIcon from '../assets/sad-face-2691.svg'


const renderWeatherInfo = (info) => {
    const location = document.querySelector('.card-location');
    const weather = document.querySelector('.card-weather');
    const temp = document.querySelector('.card-temp');
    const icon = document.querySelector('.card-icon');

    location.innerText = `${info.location.name}, ${info.location.country}`;
    weather.innerText = `${info.current.condition.text}`;
    temp.innerText = `${info.current.temp_c} °C`;
    icon.src = info.current.condition.icon;
}

const renderError = (error) => {
    const location = document.querySelector('.card-location');
    const weather = document.querySelector('.card-weather');
    const temp = document.querySelector('.card-temp');
    const icon = document.querySelector('.card-icon');

    weather.innerText = '';
    temp.innerText = '';
    icon.src = errIcon;
    location.innerText = error;
}

export {renderWeatherInfo, renderError}