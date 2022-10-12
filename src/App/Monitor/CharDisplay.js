/* eslint-disable react/prop-types */
import React from 'react'


export default function CharDisplay(props) {
    var data = `${(props.value != ' ') ? props.value.toUpperCase() : '\u00A0'}`
    return <div>{data}</div>
}