import Stat from './Stat'

const Header = ({ sprite3, sprite4, pokemonName, abilities }) => {
  console.log('sprite', sprite3)
  return (

    <div>
      <h1>{pokemonName}</h1>

      {sprite3 && sprite4 && (
        <>
          <img src={sprite3} className='sprite' alt='Sprite 3' />
          <img src={sprite4} className='sprite' alt='Sprite 4' />
        </>
      )}

      <Stat statName={'height'} statValue={'10'} />
      <Stat statName={'weight'} statValue={'70'} />

      {abilities.map((ability) => (
        <Stat key={ability.ability.name} statName={ability.ability.name} />
      ))}
    </div>
  )
}

export default Header



