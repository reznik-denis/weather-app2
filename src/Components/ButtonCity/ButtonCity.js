import { useDispatch } from 'react-redux';
import s from './buttonCity.module.css';
import { currentSearch } from '../../redux/actions';


export default function ButtonCity({ name }) {
    const dispatch = useDispatch();
    
    const handleSubmit = event => {
        dispatch(currentSearch(name))
    }

    return <button className={s.button} type='submit' onClick={handleSubmit}>{name}</button>
}