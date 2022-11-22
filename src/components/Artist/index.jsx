import React from 'react'
import { Albums } from '../'


const Artist = ({data}) => {
    return (
        <div className="artist">
            <h2>{data.name}</h2>
            <img src={data.img} alt={data.name} />
            <p>{data.bio}</p>
            <p>{data.genre}</p>
            <p>Albums: {data.albums.length}</p>
        </div>
    )
}

export default Artist
