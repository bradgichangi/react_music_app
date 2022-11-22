import React, { useState } from 'react'



const Search = ({ searchInput, setSearchInput }) => {

    const [ textInput, setTextInput ] = useState('')

    function handleChange (e) {
        setTextInput(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setSearchValue(textInput)
    }
    return (
        <form className='search-form' onSubmit={handleSubmit} >
            <input id="search-bar" type="text" value={searchInput} onChange={handleChange} />
            <input id="search-button" type="submit" value="Search" />
        </form>
    )
}

export default Search
