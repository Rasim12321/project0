import { addManyCustomersAction } from "../store/customerReducer"

const url = 'http://jsonplaceholder.typicode.com/users'
export const fetchCustomers = () => {
    // то же самое что: return function (dispatch) {}
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            // .then(json => console.log(addManyCustomersAction))
            .then(names => dispatch(addManyCustomersAction(names)))

    }
}