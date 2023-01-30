import {useDispatch, useSelector} from 'react-redux'
import { fetchCustomers } from './asyncActions/customers'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'

export default function AppMy(){
    const dispatch = useDispatch()
    //если бы не дали название редюсеру то обращались бы state.cashReducer.cash
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    // получаем состояние (параметр - функция, которая параметром 
    // принимает состояние, из которого принимаем нужную переменную)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type : 'ADD_CASH', payload : cash})
    }

    const getCash = (cash) => {
        dispatch({type : 'GET_CASH', payload : cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))

    }

    return(
        <>
            <div>{cash}</div>
            <div style={{display:'flex'}}>
                <button onClick={()=>addCash(+prompt())}> ADD Cash</button>
                <button onClick={()=>getCash(+prompt())}> GET Cash</button>
                <button onClick={()=>addCustomer(prompt())}> ADD Customer </button>
                <button onClick={()=>dispatch(fetchCustomers())}> ADD customers from base </button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map((customer, index) => 
                        <div onClick={()=>removeCustomer(customer)} key={index}> <h2>{customer.name}</h2> </div>)}
                </div>
                :
                <div>
                    <h1>Клиенты отсутствуют!</h1>
                </div>
            }
            
        
        </>
    )
}
