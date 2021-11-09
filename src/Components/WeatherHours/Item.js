import s from './sectionHours.module.css'

import { unixHours } from '../../service/dayConverter';
import { unixDay } from '../../service/dayConverter'

export default function Item({state}) {
    const { dt, weather, temp } = state;
    const dayOfWeek = unixDay(dt);
    const hourOfDay = unixHours(dt);
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{dayOfWeek} <br /> {hourOfDay}</h3>
                {temp && <p className={s.temp}>{temp > 0 ? `+${Math.round(temp)}` : Math.round(temp)}C</p>}
                {weather[0].description && <div className={s.flex}>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
}