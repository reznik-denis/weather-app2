import { timeConverter } from 'service';
import { ItemList } from 'Components/ItemList';

export default function Item({state}) {
    const { name, sys, weather, main } = state;
    return <div><h3>{name}</h3>
        {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
        {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
        <ItemList weather={weather} temp={main.temp}/>
     </div>
};