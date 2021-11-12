import s from './sectionHours.module.css'
import LazyLoad from 'react-lazyload';

import { dayConverter } from 'service';

export default function Item({state}) {
    const { dt, weather, temp } = state;
    const dayOfWeek = dayConverter.unixDay(dt);
    const hourOfDay = dayConverter.unixHours(dt);
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{dayOfWeek} <br /> {hourOfDay}</h3>
                {temp && <p className={s.temp}>{temp > 0 ? `+${Math.round(temp)}` : Math.round(temp)}C</p>}
                {weather[0].description && <div className={s.flex}>
                    <LazyLoad height={50} once>
                        <img className={s.icon} src={icon} alt={weather[0].main} />
                    </LazyLoad>
                    
                    <p>{weather[0].description}</p></div>}
            </div>
}