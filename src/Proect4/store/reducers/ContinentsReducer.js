import { SET_CONTINENTS } from "../actionTypes";

const initialState = [];

export const ContinentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTINENTS:
      return action.payload;
  }
  return state;
};
