import { FETCH_CONTINENTS, SET_CONTINENTS } from "../actionTypes"



export const setContinets = (payload) => ({type: SET_CONTINENTS, payload})
export const fetchContinents = () => ({type: FETCH_CONTINENTS})
