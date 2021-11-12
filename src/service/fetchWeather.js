import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function fetchWeather(name) {
    const KEY = '4092c7739033aaf55788405d99619a68';
    const URL = 'https://api.openweathermap.org/data/2.5/';
    return fetch(`${URL}weather?q=${name}&appid=${KEY}&units=metric&lang=en`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("There is no city with that name");
            return Promise.reject(new Error('There is no city with that name'))
        }).then(data => data);
}

export function fetchWeatherSevenDays(lat, lon) {
    const KEY = '4092c7739033aaf55788405d99619a68';
    const URL = 'https://api.openweathermap.org/data/2.5/';
    return fetch(`${URL}onecall?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${KEY}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("The weather for 7 days on this city is not available");
            return Promise.reject(new Error('The weather for 7 days on this city is not available'))
        }).then(data => data);
}