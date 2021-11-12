import { useSelector } from 'react-redux';

import { selectors } from '../../redux'
import CurrentWeather from './CurrentWeather';
import { Section } from '../Section';

export default function SectionSwitch() {
    const currentWeather = useSelector(selectors.getDitailsWeather);
    const name = useSelector(selectors.getDitailsWeather);
    
        return <Section title="Current weather" name={name.name}>
        {currentWeather && <CurrentWeather/>}
        </Section>;
};