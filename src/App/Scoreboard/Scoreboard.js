/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useRef,useState,useEffect} from 'react'
import '../App.js'

export default function Scoreboard(props)
{
    const attemptLeft = useRef(props.value)
    const[attempt, setAttempt] = useState(attemptLeft.current)
    useEffect(() => {
        setAttempt(props.value)
        attemptLeft.current = props.value
    })

    const source = `${attempt >= 10 ? '' : attempt < 0 ? 'state/state9.png' : 'state/state' + (9-attempt) + '.png'}`
    return (
        <div className="status">
            {props.egKey && <img src={props.egKey} />}
            {!props.egKey && <img src={source} />}
        </div>
    )
}