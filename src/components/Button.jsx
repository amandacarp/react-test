import React from 'react'

function Button(props){
    return (
        <>
        <button onClick={() => props.water()}>{props.name}</button>
        </>
    )
}

export default Button