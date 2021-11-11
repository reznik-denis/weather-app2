import timeConverter from '../../service/timeConverter';
import LazyLoad from 'react-lazyload';
import s from './history.module.css'

export default function Item({state}) {
    const { name, sys, weather, main } = state;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{name}</h3>
                {main.temp && <p className={s.temp}>{Math.round(main.temp) > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp)}С</p>}
                {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Weather condition </p>
                <LazyLoad height={100} once>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                </LazyLoad> 
                    <p>{weather[0].description}</p></div>}
            </div>
};