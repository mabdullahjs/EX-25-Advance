import React from 'react'
import '../components/card.css'

const Card = ({title , description, src}) => {
    return (
        <>
            <h1 id='head'>{title}</h1>
            <p style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '20px',
                margin: '10px'
            }}>{description}</p>
            <img src={src} alt="" />
            <hr />
        </>
    )
}

export default Card