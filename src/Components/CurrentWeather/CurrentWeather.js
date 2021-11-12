import s from './currentWeather.module.css';
import { ItemList } from 'Components/ItemList';
import { timeConverter } from 'service';
import { selectors } from '../../redux'
import { useSelector} from 'react-redux';


export default function CurrentWeather() {
    const { sys, main, wind, weather } = useSelector(selectors.getDitailsWeather);
    return <div>
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
                <p>Weather condition </p>
                <ItemList weather={weather}/>
            </div>   
        </div>
    </div>
};