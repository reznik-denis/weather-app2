export const getLanguage = state => state.main.current.language;
export const getCurrentSearch = state => state.main.current.search;
export const getCurrentWeather = state => state.main.currentFetch;
export const getLoading = state => state.main.loading;
export const getError = state => state.main.error;
export const getSerchHistory = state => state.main.searchHistory;
export const getWeatherListDaily = state => state.main.weatherSevenDay.daily;