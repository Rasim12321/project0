import { SET_DATA, FETCH_DATA, SET_NULL } from "../actionTypes";

export const setCountryInfo = (payload) => ({ type: SET_DATA, payload });
export const fetchCountryInfo = (countryName) => ({
  type: FETCH_DATA,
  countryName,
});

export const setNull = (payload) => ({ type: SET_NULL });
