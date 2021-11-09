import s from './history.module.css'
import { useSelector, useDispatch } from 'react-redux';

import Item from './Item';
import { currentSearch } from '../../redux/actions';
import { getHistory } from '../../redux/selectors';

export default function List() {
    const state = useSelector(getHistory)
    const dispatch = useDispatch();
    return <div>
        <ul className={s.list}>
                {state.slice(0,10).map((s) => 
                    <li key={s.date} onClick={()=>dispatch(currentSearch(s.name))}>
                        <Item state={s}/>
                   </li>
                )}
        </ul>
    </div>
}