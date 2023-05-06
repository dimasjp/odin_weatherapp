

const getWeather = async (input) => {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d40a0fbc82784379ac2121158230305&q=${input}&aqi=no`, {
            mode: 'cors'
        });
        let result = await response.json();
        console.log(result.location.name);
        console.log(result.current.condition.text);
    } catch (error) {
        console.log(error)
    } 
}

export { getWeather };