import { useEffect, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { AppBar } from 'Components/AppBar';
import { Loader } from 'Components/Loader'
import {Container} from 'Components/Container';
import { selectors } from './redux';
import { operation } from './redux';

const Main = lazy(() => import('./views/Main.js' /* webpackChunkName: "main-view" */));
const WeatherForecast = lazy(() => import('./views/WeatherForecast.js' /* webpackChunkName: "weatherForecast-view" */));
const NoFoundPage = lazy(() => import('./views/NoFoundPage.js' /* webpackChunkName: "noFoundPage-view" */))


function App() {
  const name = useSelector(selectors.getCityName);
  const currentFetch = useSelector(selectors.getDitailsWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
       dispatch(operation.fetchSearch(name))
    };
  }, [dispatch, name]);

  useEffect(() => {
    if (currentFetch) {
      dispatch(operation.fetchSearchSevenDays(currentFetch.coord))
    };
  }, [dispatch, currentFetch]);

  return <><Container>
    <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={
              <Suspense fallback={<Loader />}>
                <Main/>
              </Suspense>}/>
          <Route path="/in/:city" element={
              <Suspense fallback={<Loader />}>
                <WeatherForecast/>
              </Suspense>} />
          <Route path="*" element={
              <Suspense fallback={<Loader />}>
                <NoFoundPage/>
              </Suspense>}/>
        </Route>
    </Routes>
  </Container>
    <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
  </>
}

export default App;
