import React, { useState } from 'react'

const SearchForm = ({ searchInput, setSearchInput }) => {

    const [textInput, setTextInput] = useState('')

    function handleChange(e) {
        setTextInput(e.target.value)
        console.log(textInput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchInput(textInput)
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input id='search-bar' type="text" value={textInput} onChange={handleChange} required />
            <input id="search-button" type="submit" value="Search" />
        </form>
    )
}

export default SearchForm


