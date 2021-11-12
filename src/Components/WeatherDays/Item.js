import { ItemList } from 'Components/ItemList';

import { dayConverter } from 'service'

export default function Item({state}) {
    const { dt, weather, temp } = state;
    const dayOfWeek = dayConverter.unixDay(dt)
    return <div><h3>{dayOfWeek}</h3>
            <ItemList weather={weather} temp={temp.day}/>
        </div>
}