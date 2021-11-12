import s from './sectionHours.module.css'
import { useSelector } from 'react-redux';
import { selectors } from '../../redux';
import Item from './Item';

export default function List() {
    const state = useSelector(selectors.getWeatherHours);
    return <div>
        <ul className={s.list}>
                {state.slice(0, 12).map((s) => 
                    <li key={s.dt}>
                        <Item state={s}/>
                   </li>
                )}
        </ul>
    </div>
}