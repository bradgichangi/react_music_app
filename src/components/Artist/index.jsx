import React from 'react'
import { Albums } from '../'


const Artist = ({data}) => {

    function displayArtist (name) {
        console.log(name)
    }

    return (
        <div className="artist" onClick={displayArtist(data.name)} >
            <img src={data.img} alt={data.name}></img>
            <div className="overlay">
                <h2>{data.name}</h2>
            </div>
        </div>
    )
}

export default Artist
