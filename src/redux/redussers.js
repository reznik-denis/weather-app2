import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
    currentSearch,
    fetchSerchRequest,
    fetchSerchSuccess,
    fetchSerchError,
    fetchSearchSevenDaysAgoRequest,
    fetchSearchSevenDaysAgoSuccess,
    fetchSearchSevenDaysAgoError,
} from './actions';

let firstRender = true;

const currentSearchReducer = createReducer('minsk', {
    [currentSearch]: (state, action) => {
        return action.payload ? action.payload : state;
    },
})

const searchReducer = createReducer('', {
    [fetchSerchSuccess]: (state, action) => {
        if (firstRender) {
            firstRender = false;
            return state
        }
        const dateNow = new Date().getTime();
        return [{ ...action.payload, date: dateNow }, ...state].sort((a,b) => b.date - a.date)
    }
})

const FetchReduccer = createReducer(null, {
    [fetchSerchSuccess]: (_, action) => action.payload
});

const fetchAtFiveDayWeatherReduccer = createReducer('', {
    [fetchSearchSevenDaysAgoSuccess]: (_, action) => action.payload
})

const loading = createReducer(false, {
  [fetchSerchRequest]: () => true,
  [fetchSerchSuccess]: () => false,
  [fetchSerchError]: () => false,
});

const error = createReducer('', {
    [fetchSerchError]: (_, action) => action.payload,
    [fetchSerchRequest]: () => '',
    [fetchSearchSevenDaysAgoError]: (_, action) => action.payload,
    [fetchSearchSevenDaysAgoRequest]: () => null,
});

const searchRedusser = combineReducers({
    search: currentSearchReducer,
})

export default combineReducers({
    current: searchRedusser,
    currentFetch: FetchReduccer,
    searchHistory: searchReducer,
    weatherSevenDay: fetchAtFiveDayWeatherReduccer,
    loading,
    error,
})