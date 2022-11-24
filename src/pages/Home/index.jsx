import React, { useState, useEffect } from 'react'
import { ArtistList, Search } from '../../components'
import SearchForm from '../../layouts/SearchForn'


const Home = ({ artistData }) => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <>
            <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} />
            <ArtistList artistData={artistData} searchInput={searchInput} />
        </>
    )
}

export default Home
