import React from 'react'

const Card = ({title , description , bgColor, textColor}) => {

    
    return (
        <div style={{
            border: '1px solid black',
            borderRadius: '20px',
            padding: '20px',
            backgroundColor: bgColor ? bgColor : 'lightblue',
            color: textColor ? textColor : 'black'
        }}>
            <div>{title}</div>
            <p>{description}</p>
            <img src="https:via.placeholder.com/200" alt="image" />
        </div>
    )
}

export default Card