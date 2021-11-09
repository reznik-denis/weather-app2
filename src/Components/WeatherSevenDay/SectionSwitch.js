import { useSelector } from 'react-redux';

import { getLanguage, getWeatherListDaily } from '../../redux/selectors';
import Section from './Section';
import WeatherList from './WeatherList';

export default function SectionSwitch() {
    const state = useSelector(getWeatherListDaily)
    const language = useSelector(getLanguage);
   
    switch (language) {
        case 'en':
        return <Section title="Weather forecast at 7 days">
           {state && <WeatherList/>}
        </Section>;
        
        case  'ru':
        return <Section title="Прогноз погоды на 7 дней">
        {state && <WeatherList/>}
        </Section>;
        
        case  'ua':
        return <Section title="Прогноз погоди на 7 днів">
        {state && <WeatherList/>}
        </Section>;

        default:
        return;}}