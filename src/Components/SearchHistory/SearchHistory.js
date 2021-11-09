import s from './SearchHistory.module.css'
import { useSelector, useDispatch } from 'react-redux';

import HistoryItem from './HistoryItem';
import { currentSearch } from '../../redux/actions';
import { getSerchHistory } from '../../redux/selectors';

export default function SearchHistory() {
    const state = useSelector(getSerchHistory)
    const dispatch = useDispatch();
    return <div>
        <ul className={s.list}>
                {state.slice(0,10).map((s) => 
                    <li key={s.date} onClick={()=>dispatch(currentSearch(s.name))}>
                        <HistoryItem state={s}/>
                   </li>
                )}
        </ul>
    </div>
}