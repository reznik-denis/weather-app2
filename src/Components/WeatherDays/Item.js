import s from './weatherThreeDays.module.css'
import LazyLoad from 'react-lazyload';

import { dayConverter } from 'service'

export default function Item({state}) {
    const { dt, weather, temp } = state;
    const dayOfWeek = dayConverter.unixDay(dt)
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{dayOfWeek}</h3>
                {temp.day && <p className={s.temp}>{temp.day > 0 ? `+${Math.round(temp.day)}` : Math.round(temp.day)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <LazyLoad height={100} >
                         <img className={s.icon} src={icon} alt={weather[0].main} />
                    </LazyLoad>
                    <p>{weather[0].description}</p></div>}
            </div>
}