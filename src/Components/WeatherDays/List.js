import s from './weatherThreeDays.module.css';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux';
import Item from './Item';

export default function List({days}) {
    const state = useSelector(selectors.getWeatherDays);
    const currentDays = Number(days) + 1;
    return <div>
        <ul className={s.list}>
                {state.slice(1, currentDays).map((s) => 
                    <li key={s.dt}>
                        <Item state={s}/>
                   </li>
                )}
        </ul>
    </div>
}