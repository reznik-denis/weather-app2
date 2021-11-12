import { useSelector } from 'react-redux';

import { selectors } from '../redux';
import { SectionCurrent } from 'Components/CurrentWeather';
import { ButtonGroup } from 'Components/ButtonGroup'
import { SectionDays } from 'Components/WeatherDays';
import { Loader } from 'Components/Loader';

export default function Main() {
    const loader = useSelector(selectors.getLoading);

    return (<>
        {loader ? <Loader /> : (<>
        <ButtonGroup/>
        <SectionCurrent />
        <SectionDays days='3' />
        </>)}
    </>
    )
}