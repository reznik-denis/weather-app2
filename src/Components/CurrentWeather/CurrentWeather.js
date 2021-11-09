import { useSelector } from 'react-redux';

import CurrentWeatherEn from './LangFiles/CurrentWeatherEn';
import CurrentWeatherRu from './LangFiles/CurrentWeatherRu';
import CurrentWeatherUa from './LangFiles/CurrentWeatherUa'
import {getLanguage} from '../../redux/selectors'

export default function CurrentWeather() {
    const language = useSelector(getLanguage);
    switch (language) {
        case 'en':
        return <CurrentWeatherEn />;
        
        case  'ru':
        return <CurrentWeatherRu />;
        
        case  'ua':
        return <CurrentWeatherUa />
      default:
        return;}
};