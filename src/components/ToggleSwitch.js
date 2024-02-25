import React from 'react'

const ToggleSwitch = ({ onToggle, label }) => {
  return (


    <div className='toggleSwitch'>
      <label className='switch'>
        <input type='checkbox' onClick={onToggle} />
        <span className='slider round'></span>
      </label>
      {label && <span>{label}</span>}
    </div>
  )
}

export default ToggleSwitch
