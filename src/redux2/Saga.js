import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from "./store/countReducer"
import { fetchUsers } from './store/userReducer'

export default function Saga() {
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()

    // в диспатч просто передаем actionCreator, за которым следит watcher
    return (
        <>
            <div>{count}</div>
            <div>
                <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>Increment</button>
                <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>Decrement</button>
                <button className="btn" onClick={()=> dispatch(fetchUsers())}>GET Users</button>
            </div>
            <div>
                {users.map((user, index) => <div key={index}>{user.name}</div>)}
            </div>
        </>
    )
}


