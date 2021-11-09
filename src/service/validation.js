import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';

export function validationName(search) {
    const val = search.replace(/\s/g, '');
    const validation = validator.isAlpha(val,'en-US', {ignore: '-'})
        return validation === false
}