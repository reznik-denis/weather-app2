import { configureStore } from "@reduxjs/toolkit";   
import searchReducer from './redussers';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['current', 'currentFetch', 'error', 'loading', 'weatherSevenDay'],
}


export const store = configureStore({
    reducer: {
    main: persistReducer(persistConfig, searchReducer)
},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);