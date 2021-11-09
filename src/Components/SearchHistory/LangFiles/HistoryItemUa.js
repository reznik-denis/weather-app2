import timeConverter from '../../../service/timeConverter';
import s from '../SearchHistory.module.css'

export default function HistoryItemUa({ state }) {
    const { name, sys, weather, main } = state;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{name}</h3>
                {main.temp && <p className={s.temp}>{Math.round(main.temp) > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp)}С</p>}
                {sys.sunrise && <p>Схід сонця - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Захід сонця - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодні умови </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
}
