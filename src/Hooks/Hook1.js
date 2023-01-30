import React from "react"
import { useState } from "react"

export default function Hook1 (){
    const [buttonText, setButtonText] = useState('Push')
    return(
        <>
            <button onClick={() => setButtonText('I was Pushed')}>{buttonText}</button>
        </>
    )
}