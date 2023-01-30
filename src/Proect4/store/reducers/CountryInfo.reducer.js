import { SET_DATA } from "../actionTypes";
import { SET_NULL } from "../actionTypes";
const initialState = null;

export const CountryInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    case SET_NULL:
      return null;
  }
  return state;
};
