import { useSelector, useDispatch } from "react-redux"
import { usersFetch } from "../reducers/usersReducer"

export default function Users(){
    const dispatch = useDispatch()
    const add = () => {
         dispatch(usersFetch())
    }

    return(
        <>
            <div>
                <button onClick={add}>Add Users</button>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}