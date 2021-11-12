import { ItemList } from 'Components/ItemList';

import { dayConverter } from 'service';

export default function Item({state}) {
    const { dt, weather, temp } = state;
    const dayOfWeek = dayConverter.unixDay(dt);
    const hourOfDay = dayConverter.unixHours(dt);
    return <div><h3>{dayOfWeek} <br /> {hourOfDay}</h3>
        <ItemList weather={weather} temp={temp}/>
    </div>
}