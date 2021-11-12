import { useSelector} from 'react-redux';

import { selectors } from '../../redux';
import { Section } from '../Section';
import List from './List';

export default function SectionDays({days}) {
    const state = useSelector(selectors.getWeatherDays);
    const name = useSelector(selectors.getDitailsWeather);
    
    return <Section title={` ${days} days weather forecast`} name={name.name}>
            {state && <List days={days}/>}
        </Section>;
};