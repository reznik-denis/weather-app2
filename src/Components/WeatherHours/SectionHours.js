import { useSelector } from 'react-redux';

import { selectors} from '../../redux';
import { Section } from '../Section';
import List from './List';

export default function SectionDays() {
    const state = useSelector(selectors.getWeatherDays);
    const {date, name} = useSelector(selectors.getDitailsWeather);
    
    return ((date !== 0) && <Section title={`Hourly weather forecast`} name={name} >
            {state && <List/>}
        </Section >)
};