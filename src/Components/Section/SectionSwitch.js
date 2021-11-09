import { useSelector } from 'react-redux';

import { getLanguage, getCurrentWeather } from '../../redux/selectors'
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Section from './Section';

export default function SectionSwitch() {
    const language = useSelector(getLanguage);
    const currentWeather = useSelector(getCurrentWeather);

    switch (language) {
        case 'en':
        return <Section title="Current weather">
        {currentWeather && <CurrentWeather/>}
        </Section>;
        
        case  'ru':
        return <Section title="Текущая погода">
        {currentWeather && <CurrentWeather/>}
        </Section>;
        
        case  'ua':
        return <Section title="Погода на сьогодні">
        {currentWeather && <CurrentWeather/>}
        </Section>;

        default:
        return;}}