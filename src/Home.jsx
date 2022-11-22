import React, { useState } from 'react'
import { ArtistList, Search } from './components'
import './app.css'


const Home = () => {

    const [ searchInput, setSeacrhInput ] = useState('')

    return (
        <>
            <header>
                <h1 id='title'>SpeakerBox</h1>
            </header>
            <Search searchInput={searchInput} setSeacrhInput={setSeacrhInput} />
            <ArtistList />
        </>
    )
}

export default Home
