import { useSelector } from 'react-redux';

import { getLanguage} from '../../redux/selectors'
import WeatherItemEn from './LangFiles/WeatherItemEn';
import WeatherItemRu from './LangFiles/WeatherItemRu';
import WeatherItemUa from './LangFiles/WeatherItemUa';

export default function WeatherItem({state}) {
    const language = useSelector(getLanguage);
    switch (language) {
        case 'en':
            return <WeatherItemEn state={state} />
        case 'ru':
            return <WeatherItemRu state={state}/>
        case 'ua':
            return <WeatherItemUa state={state} />
        default:
            return;
    }
}