import React from 'react'


const Track = ({data}) => {
    return (
        <div className="track">
            <h2>{data.name}</h2>
            <p>{data.length}</p>
        </div>
    )
}

export default Track
