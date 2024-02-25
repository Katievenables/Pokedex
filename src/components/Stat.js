const Stat = ({ statName, statValue }) => {
  return (
    <div className={'stat'}>
      <p id='statName'>{statName}</p>
      <p>{statValue}</p>
    </div>
  )
}

export default Stat