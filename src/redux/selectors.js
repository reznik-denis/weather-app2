export const getCityName = state => state.main.current;
export const getDitailsWeather = state => state.main.ditailsWeather;
export const getLoading = state => state.main.loading;
export const getError = state => state.main.error;
export const getHistory = state => state.main.history;
export const getWeatherDays = state => state.main.weatherSevenDay.daily;
export const getWeatherHours = state => state.main.weatherSevenDay.hourly;