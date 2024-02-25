import { useState } from 'react'

export const Search = ({ setSearchPokemon }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const lowercasePokemon = searchValue.toLowerCase()
    setSearchPokemon(lowercasePokemon)
  }

  const handleOnChange = (e) => {
    // e.preventDefault();
    setSearchValue(e.target.value)
  }

  return (
    <div className='searchBox'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Search Pokemon</label>
        <input
          value={searchValue}
          onChange={(e) => handleOnChange(e)}
          type='text'
          id='name'
          placeholder='Search for a Pokemon'
        />
        <button class='searchButton' href='#'><i className='material-icons'><i className='search icon'></i>
        </i>
        </button>

      </form>
    </div>
  )
}
