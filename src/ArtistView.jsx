import React, { useState } from 'react'
import { ArtistList, Search } from './components'
import './app.css'


const ArtistView = () => {

    const [ searchInput, setSeacrhInput ] = useState('')

    return (
        <>
        <h1>Drake</h1>
        <img src={data.img} alt={data.name} />
        </>
    )
}

export default ArtistView
