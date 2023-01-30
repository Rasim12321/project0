import { SET_LOADING } from "../actionTypes";

const initialState = false;
export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
  }
  return state;
};
