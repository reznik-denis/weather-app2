import { useSelector } from 'react-redux';

import { getLanguage} from '../../redux/selectors'
import HistoryItemEn from './LangFiles/HistoryItemEn';
import HistoryItemRu from './LangFiles/HistoryItemRu';
import HistoryItemUa from './LangFiles/HistoryItemUa';

export default function HistoryItem({state}) {
    const language = useSelector(getLanguage);
    switch (language) {
        case 'en':
            return <HistoryItemEn state={state}/>
        case 'ru':
            return <HistoryItemRu state={state}/>
        case 'ua':
            return <HistoryItemUa state={state}/>
        default:
            return;
    }
}