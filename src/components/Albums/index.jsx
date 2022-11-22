import React from 'react'
import { Track } from '../'

const Albums = ({data}) => {
    return (
        <div className="album">
            <h2>{data.name}</h2>
            <img src={data.img} alt={data.name} />
            <p>{data.genre}</p>
            <p>{data.date}</p>
            { albumData.map((track, index) => <Track key = {index} data = {track}/>) }
        </div>
    )
}

export default Albums
