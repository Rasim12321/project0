import { SET_COUNTRIES, FETCH_COUNTRIES } from "../actionTypes";

export const setCountries = (payload) => ({ type: SET_COUNTRIES, payload });
export const fetchCountries = (payload) => ({ type: FETCH_COUNTRIES, payload });
