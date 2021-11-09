import s from '../CurrentWeather.module.css';
import timeConverter from '../../../service/timeConverter';
import { getCurrentWeather } from '../../../redux/selectors'
import { useSelector} from 'react-redux';

export default function CurrentWeatherUa() {
    const { name, sys, main, wind, weather } = useSelector(getCurrentWeather);
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div>
        <h2 className={s.title}>Погода в місті <span className={s.capitalize}>{name}</span></h2>
        <div className={s.box}>
            {main.temp && <p className={s.temp}>{main.temp > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp)}С</p>}
            <div className={s.margin}>
                {main.feels_like && <p>Відчувається як {main.feels_like > 0 ? `+${Math.round(main.feels_like)}`: Math.round(main.feels_like)}C </p>}
                {main.humidity && <p>Вологість {main.humidity}%</p>}
                {main.pressure && <p>Атмосферний тиск {main.pressure}hPa</p>}
                {main.temp_min && <p>Мінімально можлива темература {main.temp_min > 0 ? `+${Math.round(main.temp_min)}` : Math.round(main.temp_min)}С</p>}
                {main.temp_max && <p>Максимально можлива температура {main.temp_max > 0 ? `+${Math.round(main.temp_max)}` : Math.round(main.temp_max)}С</p>}
                {main.grnd_level && <p>Атмосферний тиск на рівні землі {main.grnd_level}hPa</p>}
                {(wind.speed || wind.speed === 0) && <p>Швидкість повітря {Math.round(wind.speed)} м/с</p>}
                {(wind.gust || wind.gust === 0) && <p>Пориви вітру {Math.round(wind.gust)} м/с</p>}
            </div>
            <div className={s.width}>
                {sys.sunrise && <p>Схід сонця - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Захід сонця - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодні умови </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p>
                </div>}
            </div>   
        </div>
        </div>
}