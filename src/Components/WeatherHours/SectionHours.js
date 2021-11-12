import { useSelector } from 'react-redux';

import { selectors} from '../../redux';
import { Section } from '../Section';
import List from './List';

export default function SectionDays() {
    const state = useSelector(selectors.getWeatherDays);
    const name = useSelector(selectors.getDitailsWeather);
    
    return <Section title={`Hourly weather forecast`} name={name.name} >
            {state && <List/>}
        </Section>;
};