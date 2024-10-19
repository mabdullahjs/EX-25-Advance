import React from 'react'

const Card = ({title , price , src , description}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl border border-black">
            <figure>
                <img
                    src={src}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Rs: {price}</p>
                <p>Rs: {description.slice(0 , 10)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show more..</button>
                </div>
            </div>
        </div>
    )
}

export default Card