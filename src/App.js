import './App.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Components/Form/Form';
import Loader from './Components/Loader/Loader';
import SectionSwitch from './Components/Section/SectionSwitch';
import SectionWeatherSevenDays from './Components/WeatherSevenDay/SectionSwitch';
import SearchHistorySwitch from './Components/SearchHistory/SearchHistorySwitch';
import LangButton from './Components/LangButton/LangBatton'
import { getCurrentSearch, getLoading, getError, getCurrentWeather, getSerchHistory, getLanguage } from './redux/selectors';
import { fetchSearch, fetchSearchSevenDaysAgo } from './redux/operations';


function App() {
  const name = useSelector(getCurrentSearch);
  const language = useSelector(getLanguage);
  const loader = useSelector(getLoading);
  const currentFetch = useSelector(getCurrentWeather);
  const serchHistory = useSelector(getSerchHistory)
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name ?? language) {
       dispatch(fetchSearch(name, language))
    };
  }, [dispatch, name, language]);

  useEffect(() => {
    if (currentFetch) {
      dispatch(fetchSearchSevenDaysAgo(currentFetch.coord.lat, currentFetch.coord.lon, language))
    };
  }, [dispatch, currentFetch, language]);

  return <div className="App">
      <LangButton/>
      {error && <h1>{error}</h1>}
      <Form />
      {loader ? <Loader /> : <SectionSwitch />}
      <SectionWeatherSevenDays/>
      {serchHistory && <SearchHistorySwitch />}
      <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
  </div>
}

export default App;
