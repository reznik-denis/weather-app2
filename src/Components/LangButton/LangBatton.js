import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { currentLanguage } from '../../redux/actions';
import s from './LangButton.module.css';

export default function LangBatton() {
    const dispatch = useDispatch();
    const [language, setLanguage] = useState('ru');
   
    useEffect(() => {
        if (language === undefined) {
            return
        }
        dispatch(currentLanguage(language))
    }, [dispatch, language]
    );
    
    const onHandlerChange = event => {
        setLanguage(event.target.value);
    };

    return <form className={s.form}>
        {language === 'en' && <label htmlFor="lang">Language</label>}
        {language === 'ru' && <label htmlFor="lang">Язык</label>}
        {language === 'ua' && <label htmlFor="lang">Мова</label>}
            <select id="leng" name="language" defaultValue={language} onChange={onHandlerChange}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="ua">Українська</option>
            </select>
        </form>
}