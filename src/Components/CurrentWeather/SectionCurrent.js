import { useSelector } from 'react-redux';

import { getCurrentWeather } from '../../redux/selectors'
import CurrentWeather from './CurrentWeather';
import Section from '../Section/Section';

export default function SectionSwitch() {
    const currentWeather = useSelector(getCurrentWeather);
        return <Section title="Current weather">
        {currentWeather && <CurrentWeather/>}
        </Section>;
};