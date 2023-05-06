import { getWeather } from "./modules/api";
import './style.css';

const form = document.querySelector('.card-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formInput = document.querySelector('#card-form-input');
    getWeather(formInput.value);
    formInput.value = '';
});


