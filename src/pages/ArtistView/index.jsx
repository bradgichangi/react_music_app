import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Artist, ArtistList, Search } from '../../components'
import './artist.css'


const ArtistView = ({ artistData }) => {

    const params = useParams()

    return (
        
        <Artist data={artistData.filter(artist => artist.name.includes(params.name))[0]} />
    )
}

export default ArtistView
