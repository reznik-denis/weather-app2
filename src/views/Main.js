import { useSelector } from 'react-redux';

import { getLoading, getError } from '../redux/selectors';
import SectionCurrent from '../Components/CurrentWeather/SectionCurrent';
import ButtonGroup from '../Components/ButtonGroup/ButtonGroup'
import SectionDays from '../Components/WeatherDays/SectionDays';
import Loader from '../Components/Loader/Loader';

export default function Main() {
    const error = useSelector(getError);
    const loader = useSelector(getLoading);

    return (<>
        {error && <h1>{error}</h1>}
        {loader ? <Loader /> : (<>
        <ButtonGroup/>
        <SectionCurrent />
        <SectionDays days='3' />
        </>)}
    </>
    )
}