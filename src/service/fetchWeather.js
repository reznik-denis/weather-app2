import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function fetchWeather(name, language) {
    const KEY = '4092c7739033aaf55788405d99619a68';
    const URL = 'https://api.openweathermap.org/data/2.5/';
    return fetch(`${URL}weather?q=${name}&appid=${KEY}&units=metric&lang=${language}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("Город с таким именем отсутсвует");
            return Promise.reject(new Error('There is no city with that name'))
        }).then(data => data);
}

export function fetchWeatherSevenDaysAgo(lat, lon, language) {
    const KEY = '4092c7739033aaf55788405d99619a68';
    const URL = 'https://api.openweathermap.org/data/2.5/';
    return fetch(`${URL}onecall?lat=${lat}&lon=${lon}&units=metric&lang=${language}&appid=${KEY}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("Погода за 5 дней по этому городу не доступна");
            return Promise.reject(new Error('The weather for 5 days on this city is not available'))
        }).then(data => data);
}