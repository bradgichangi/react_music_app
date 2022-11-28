import React, { useState } from 'react'
import { ArtistList, Search } from '../../components'
import SearchForm from '../../layouts/SearchForm'


const Home = () => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <>
            <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} />
            <ArtistList searchInput={searchInput} />
        </>
    )
}

export default Home
