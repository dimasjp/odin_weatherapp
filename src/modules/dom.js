

const renderWeatherInfo = (info) => {
    const location = document.querySelector('.card-location');
    const weather = document.querySelector('.card-weather');
    const icon = document.querySelector('.card-icon');

    location.innerText = `${info.location.name}, ${info.current.condition.text}`
    icon.src = info.current.condition.icon;
}

export {renderWeatherInfo}