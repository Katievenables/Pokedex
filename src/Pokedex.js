import axios from 'axios'
import { useEffect, useState } from 'react'
import Stats from './components/Stats'
import Header from './components/Header'
import { Search } from './components/Search'
import ToggleSwitch from './components/ToggleSwitch'


const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null)
  const [searchPokemon, setSearchPokemon] = useState(1)
  const [isShiny, setIsShiny] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchPokemon])

  const getRandom = () => {
    return setSearchPokemon(Math.floor(Math.random() * 151 + 1))
  }

  const handleShinyToggle = () => {
    setIsShiny(!isShiny)
  }

  console.log('search error', error)

  return (
    <>
      <div className='background' id={pokemon ? pokemon?.types[0]?.type.name : ''}>
        <div className='searchContainer'>
          <Search setSearchPokemon={setSearchPokemon} />
          <button className='randomButton' onClick={() => getRandom()}>
            Random Pokemon!
          </button>

        </div>
        {loading && <p className='notFound'>Loading...</p>}
        {error && !loading && <p className='notFound'>Pokemon not found, try another!</p>}
        {pokemon && !error && !loading && (

          <div className='contentContainer'>
            <div className='header'>
              <Header
                sprite3={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                sprite4={isShiny ? pokemon.sprites.back_shiny : pokemon.sprites.back_default}
                pokemonName={pokemon.name}
                abilities={pokemon.abilities}
              />
              <ToggleSwitch className='toggleSwitch' onToggle={handleShinyToggle} label='Toggle Shiny Sprites' />
            </div>

            <div className='statContainer'>
              <Stats
                hp={pokemon.stats[0].stat.name}
                hpStat={pokemon.stats[0].base_stat}
                attack={pokemon.stats[1].stat.name}
                attackStat={pokemon.stats[1].base_stat}
                defense={pokemon.stats[2].stat.name}
                defenseStat={pokemon.stats[2].base_stat}
                specialAttack={pokemon.stats[3].stat.name}
                specialAttackStat={pokemon.stats[3].base_stat}
                specialDefense={pokemon.stats[4].stat.name}
                specialDefenseStat={pokemon.stats[4].base_stat}
                speed={pokemon.stats[5].stat.name}
                speedStat={pokemon.stats[5].base_stat}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Pokedex

