export const getCityName = state => state.main.current.search;
export const getCurrentWeather = state => state.main.currentFetch;
export const getLoading = state => state.main.loading;
export const getError = state => state.main.error;
export const getHistory = state => state.main.searchHistory;
export const getWeatherDays = state => state.main.weatherSevenDay.daily;
export const getWeatherHours = state => state.main.weatherSevenDay.hourly;