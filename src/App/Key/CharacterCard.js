/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import '../App.css';

export default function CharacterCard(props)
{
    const [active, setActive] = useState(false)
    const tempEnd = useRef(props.ends)
    useEffect(() => {
        if(props.ends != tempEnd.current)
        {
            tempEnd.current = props.ends
            setActive(false)
        }
    })

    const activate = () => {
        if(!active)
        {
            setActive(true)
            props.activationHandler(props.value)
        }
    }

    const className = `card ${active ? 'active-card' : ''}`
    return (
        <div className={className} onClick={activate}>{ props.value }</div>
    )
}