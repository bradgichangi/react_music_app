import React from 'react'
import { Albums } from '../'


const Artist = ({data}) => {

    function displayArtist (name) {
        console.log(name)
    }

    return (
        <div className="artist" onClick={displayArtist(data.name)} >
            <h2>{data.name}</h2>
            <img src={data.img} alt={data.name}></img>
        </div>
    )
}

export default Artist
