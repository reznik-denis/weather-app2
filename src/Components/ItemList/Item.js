import s from './item.module.css'
import LazyLoad from 'react-lazyload';

export default function ItemList({weather, temp}) {
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    return <>{temp && <p className={s.temp}>{temp > 0 ? `+${Math.round(temp)}` : Math.round(temp)}C</p>}
            {weather[0].description && <div className={s.flex}>
                <LazyLoad height={50} once>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                </LazyLoad>
            <p>{weather[0].description}</p></div>}
            </>
}