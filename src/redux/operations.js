import {
    fetchSerchRequest,
    fetchSerchSuccess,
    fetchSerchError,
    fetchSearchSevenDaysAgoRequest,
    fetchSearchSevenDaysAgoSuccess,
    fetchSearchSevenDaysAgoError
} from './actions';
import { fetchWeather, fetchWeatherSevenDaysAgo } from '../service/fetchWeather'

export const fetchSearch = (name, language) => async dispatch => {
    dispatch(fetchSerchRequest());
    try {
        const search = await fetchWeather(name, language)
        dispatch(fetchSerchSuccess(search));
    } catch (error) {
        dispatch(fetchSerchError(error.toString()));
    };
}

export const fetchSearchSevenDaysAgo = (lat, lon, language) => async dispatch => {
    dispatch(fetchSearchSevenDaysAgoRequest());
    try {
        const search = await fetchWeatherSevenDaysAgo(lat, lon, language)
        dispatch(fetchSearchSevenDaysAgoSuccess(search));
    } catch (error) {
        dispatch(fetchSearchSevenDaysAgoError(error.toString()));
    };
}