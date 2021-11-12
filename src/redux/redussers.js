import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {currentSearch} from './actions';
import {fetchSearch, fetchSearchSevenDays} from './operations'

let firstRender = true;

const cityReducer = createReducer('minsk', {
    [currentSearch]: (state, action) => {
        return action.payload ? action.payload : state;
    },
})

const historyReducer = createReducer('', {
    [fetchSearch.fulfilled]: (state, action) => {
        if (firstRender) {
            firstRender = false;
            return state
        }
        const dateNow = new Date().getTime();
        return [{ ...action.payload, date: dateNow }, ...state].sort((a,b) => b.date - a.date)
    }
})

const ditailsWeatherReduccer = createReducer(null, {
    [fetchSearch.fulfilled]: (_, action) => action.payload
});

const weatherDaysReduccer = createReducer('', {
    [fetchSearchSevenDays.fulfilled]: (_, action) => action.payload
})

const loading = createReducer(false, {
    [fetchSearch.pending]: () => true,
    [fetchSearch.fulfilled]: () => false,
    [fetchSearch.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchSearch.rejected]: (_, action) => action.payload,
    [fetchSearch.pending]: () => null,
    [fetchSearchSevenDays.rejected]: (_, action) => action.payload,
    [fetchSearchSevenDays.pending]: () => null,
});


export default combineReducers({
    current: cityReducer,
    ditailsWeather: ditailsWeatherReduccer,
    history: historyReducer,
    weatherSevenDay: weatherDaysReduccer,
    loading,
    error,
})