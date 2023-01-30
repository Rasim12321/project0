import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export default function DataLoaderHook(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(1)
            setData(data)
            console.log(data)
        })
    }, [])

    return(
        <>
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}