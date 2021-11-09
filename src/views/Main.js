import { useSelector} from 'react-redux';

import { getLoading, getError } from '../redux/selectors';
import SectionCurrent from '../Components/CurrentWeather/SectionCurrent';
import SectionDays from '../Components/WeatherDays/SectionDays';
import ButtonGroup from '../Components/ButtonGroup/ButtonGroup'
import Loader from '../Components/Loader/Loader';


export default function Main() {
    const error = useSelector(getError);
    const loader = useSelector(getLoading);

    return (<>
        {error && <h1>{error}</h1>}
        <ButtonGroup/>
        {loader ? <Loader /> : <SectionCurrent />}
        <SectionDays days='3' />
    </>
    )
}