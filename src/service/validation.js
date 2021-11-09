import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';

export function validationName(search) {
    const val = search.replace(/\s/g, '');
    const validation = {
            en: validator.isAlpha(val,'en-US', {ignore: '-'}),
            ua: validator.isAlpha(val, 'uk-UA',{ignore: '-'}),
            ru: validator.isAlpha(val, 'ru-RU',{ignore: '-'})
        };
    
        return (validation.en === false
            && validation.ua === false
            && validation.ru === false)
}