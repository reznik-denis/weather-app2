import s from '../CurrentWeather.module.css';
import timeConverter from '../../../service/timeConverter';
import { getCurrentWeather } from '../../../redux/selectors'
import { useSelector} from 'react-redux';

export default function CurrentWeatherEn() {
    const { name, sys, main, wind, weather } = useSelector(getCurrentWeather);
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div>
        <h2 className={s.title}>Weather in <span className={s.capitalize}>{name}</span></h2>
        <div className={s.box}>
            {main.temp && <p className={s.temp}>{main.temp > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp)}С</p>}
            <div className={s.margin}>
                {main.feels_like && <p>Feels like {main.feels_like > 0 ? `+${Math.round(main.feels_like)}`: Math.round(main.feels_like)}C </p>}
                {main.humidity && <p>Humidity {main.humidity}%</p>}
                {main.pressure && <p>Atmospheric pressure {main.pressure}hPa</p>}
                {main.temp_min && <p>Minimum temperature at the moment {main.temp_min > 0 ? `+${Math.round(main.temp_min)}` : Math.round(main.temp_min)}С</p>}
                {main.temp_max && <p>Maximum temperature at the moment {main.temp_max > 0 ? `+${Math.round(main.temp_max)}` : Math.round(main.temp_max)}С</p>}
                {main.grnd_level && <p>Atmospheric pressure on the ground level {main.grnd_level}hPa</p>}
                {(wind.speed || wind.speed === 0) && <p>Wind speed {Math.round(wind.speed)} meter/sec</p>}
                {(wind.gust || wind.gust === 0) && <p>Wind gust {Math.round(wind.gust)} meter/sec</p>}
            </div>
            <div className={s.width}>
                {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Weather condition </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p>
                </div>}
            </div>   
        </div>
    </div>
}