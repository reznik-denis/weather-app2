import { useSelector } from 'react-redux';

import { getWeatherDays} from '../../redux/selectors';
import Section from '../Section/Section';
import List from './List';

export default function SectionDays() {
    const state = useSelector(getWeatherDays);
    
    return <Section title={`Hourly weather forecast`} >
            {state && <List/>}
        </Section>;
};