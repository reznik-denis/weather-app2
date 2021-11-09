import { useSelector, useDispatch } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { currentSearch } from '../redux/actions'

import Form from '../Components/Form/Form';
import SectionDays from '../Components/WeatherDays/SectionDays';
import SectionHours from '../Components/WeatherHours/SectionHours';
import SectionHistory from '../Components/History/History';
import Loader from '../Components/Loader/Loader';
import { getHistory, getCityName, getError, getLoading } from '../redux/selectors';

export default function WeatherForecast() {
    const { city } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(getCityName);
    const error = useSelector(getError);
    const history = useSelector(getHistory)
    const loader = useSelector(getLoading);
    
    useEffect(() => {
        if (name) {
            if (name === city) {
                return
            } else {
                navigate(`/in/${name}`)
            }
        } else {
                dispatch(currentSearch(city))
            }
        }, [dispatch, name, city, navigate]);
    
    return <>
        {error && <h1>{error}</h1>}
        {loader ? <Loader /> : (<>
        <SectionHours/>
        <SectionDays days='7' />
        </>)}
        <Form />
        {history && <SectionHistory />}
    </>
}