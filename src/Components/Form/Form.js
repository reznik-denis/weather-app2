import s from './form.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { validationName } from '../../service/validation';
import { currentSearch } from '../../redux/actions'

export default function Form() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
  
    const handleOnChangeInput = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    };

    const onSubmitHandler = event => {
        event.preventDefault();

        if (search.trim() === '') {
            toast.error("Enter city!");
            return
        } else if (validationName(search)) {
            toast.error("Your city invalid!");
            reset();
            return
        } else {
            dispatch(currentSearch(search))
        };
    
        reset();
    }

    const reset = () => {
        setSearch('');
    };

    return <form className={s.form} onSubmit={onSubmitHandler}>
        <label className={s.lableForm} htmlFor="city">Change your city</label>
        <div className={s.flex}>
            <input
            className={s.inputLable}
            type="text"
            id="city"
            value={search}
            onChange={handleOnChangeInput}
            autoComplete="off"/>
        <button className={s.button} type='submit'>Search</button>
        </div>
    </form>
}