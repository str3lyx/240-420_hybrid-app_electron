/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect, useRef } from 'react'
import '../App.js'
import CharDisplay from './CharDisplay.js'

export default function Monitor(props)
{
    const guessingWord = useRef(props.value)
    const[display, setDisplay] = useState(guessingWord.current)
    useEffect(() => {
        setDisplay(props.value)
        guessingWord.current = props.value
    })
    return (
        <div className="canvas">
            {
                Array.from(props.value).map((c,i) => <CharDisplay value={c} key={i} />)
            }
        </div>
    )
}