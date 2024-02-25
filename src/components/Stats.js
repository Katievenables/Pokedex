import Stat from './Stat'

const Stats = ({
                 attack,
                 attackStat,
                 hp,
                 hpStat,
                 defense,
                 defenseStat,
                 specialAttack,
                 specialAttackStat,
                 specialDefense,
                 specialDefenseStat,
                 speed,
                 speedStat
               }) => {
  return (
    <div>
      <h2>Stats</h2>
      <Stat statName={hp} statValue={hpStat} />
      <Stat statName={attack} statValue={attackStat} />
      <Stat statName={defense} statValue={defenseStat} />
      <Stat statName={specialAttack} statValue={specialAttackStat} />
      <Stat statName={specialDefense} statValue={specialDefenseStat} />
      <Stat statName={speed} statValue={speedStat} />
    </div>
  )
}

export default Stats
