
const initialState = {
    users : []
}
const ADD_USERS = 'ADD_USERS'
export const USERS_FETCH = 'USERS-FETCH'

export const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_USERS :
            return {...state, users: action.payload}
    }
    return state
}

export const addUsers = payload => ({type: ADD_USERS, payload})
export const usersFetch = payload => ({type: USERS_FETCH, payload})