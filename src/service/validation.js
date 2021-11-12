import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';

export default function validation(search) {
    const val = search.replace(/\s/g, '');
    const validation = validator.isAlpha(val,'en-US', {ignore: '-'})
        return validation === false
}