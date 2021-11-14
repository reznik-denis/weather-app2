import { useSelector } from 'react-redux';

import { selectors } from '../../redux'
import CurrentWeather from './CurrentWeather';
import { Section } from '../Section';

export default function SectionSwitch() {
    const name = useSelector(selectors.getDitailsWeather);
    
        return <Section title="Current weather" name={name.name}>
        {name && <CurrentWeather/>}
        </Section>;
};