import './App.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppBar from './Components/AppBar/AppBar';
import WeatherForecast from "./views/WeatherForecast";
import Main from './views/Main';
import { getCityName, getCurrentWeather} from './redux/selectors';
import { fetchSearch, fetchSearchSevenDaysAgo } from './redux/operations';


function App() {
  const name = useSelector(getCityName);
  const currentFetch = useSelector(getCurrentWeather);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
       dispatch(fetchSearch(name))
    };
  }, [dispatch, name]);

  useEffect(() => {
    if (currentFetch) {
      dispatch(fetchSearchSevenDaysAgo(currentFetch.coord.lat, currentFetch.coord.lon))
    };
  }, [dispatch, currentFetch]);

  return <div className="App">
    <Routes>
      <Route path="/" element={<AppBar />}>
          <Route index element={<Main/>}/>
          <Route path="/in/:city" element={<WeatherForecast/>}/>
      </Route>
    </Routes>
    <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
  </div>
}

export default App;
