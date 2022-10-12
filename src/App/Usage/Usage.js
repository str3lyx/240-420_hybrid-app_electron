/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from 'react'

export default function Usage(props) {
    const tempWin = useRef(props.streak)
    const[win, setWin] = useState(tempWin.current)
    const attemptLeft = useRef(props.value)
    const[attempt, setAttempt] = useState(attemptLeft.current)
    useEffect(() => {
        setAttempt(props.value)
        attemptLeft.current = props.value
        setWin(props.streak)
        tempWin.current = props.streak
    })

    return (
        <div className="usage">
            <div id="description">
                <img src="logo.png"></img>
                <div>
                    <div className="lab">Assignment</div>
                    <div className="h-seperator">{'\u00A0'}</div>
                    <div className="std-id">240-420: Hybrid App</div>
                </div>
            </div>
            <div id="game-status">
                <div className="left">
                    <span>Attempt Left: </span>
                    <span>{attempt}</span>
                </div>
                <div className="right">
                    <span>Win Streak: </span>
                    <span id="win">{win}</span>
                </div>
            </div>
        </div>
    )
}