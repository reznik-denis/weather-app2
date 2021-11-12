import { useSelector, useDispatch } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

import { currentSearch } from 'redux/actions'

import { Form } from 'Components/Form';
import { SectionDays } from 'Components/WeatherDays';
import { SectionHours } from 'Components/WeatherHours';
import { SectionHistory } from 'Components/History';
import { Loader } from 'Components/Loader';
import { selectors } from '../redux';

export default function WeatherForecast() {
    const { city } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(selectors.getCityName);
    const history = useSelector(selectors.getHistory)
    const loader = useSelector(selectors.getLoading);
    
    useEffect(() => {
        if (name) {
            if (name === city) {
                return
            } else {
                navigate(`/in/${city}`);
                dispatch(currentSearch(city))
            }
        }
    }, [dispatch, name, city, navigate]);
    
    return <>
        {loader ? <Loader /> : (<>
        <SectionHours/>
        <SectionDays days='7' />
        <Form />
        {history && <SectionHistory />}
        </>)}
    </>
}