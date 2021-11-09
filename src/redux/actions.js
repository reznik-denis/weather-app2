import { createAction} from "@reduxjs/toolkit";

export const currentSearch = createAction('form/currentSearch');
export const currentLanguage = createAction('form/currentLanguage');

export const fetchSerchRequest = createAction('app/fetchSerchRequest');
export const fetchSerchSuccess = createAction('app/fetchSerchSuccess');
export const fetchSerchError = createAction('app/fetchSerchError');

export const fetchSearchSevenDaysAgoRequest = createAction('app/fetchSearchFiveDaysAgoRequest');
export const fetchSearchSevenDaysAgoSuccess = createAction('app/fetchSearchFiveDaysAgoSuccess');
export const fetchSearchSevenDaysAgoError = createAction('app/fetchSearchFiveDaysAgoError');

