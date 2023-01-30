import { SET_COUNTRIES } from "../actionTypes";

const initialState = null;

export const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return action.payload;
  }
  return state;
};
