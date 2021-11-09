import { useSelector} from 'react-redux';

import { getWeatherDays } from '../../redux/selectors';
import Section from '../Section/Section';
import List from './List';

export default function SectionDays({days}) {
    const state = useSelector(getWeatherDays);
    
        return <Section title={` ${days} days weather forecast`}>
            {state && <List days={days}/>}
        </Section>;
};