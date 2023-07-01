import React from 'react'

export default function Cell(props) {
  const { cellIndex, isOn, toggleLight } = props

  function handleToggleLight() {
    toggleLight(cellIndex)
  }

  return (
    <button
      className={isOn ? 'Cell-on' : 'Cell-off'}
      onClick={handleToggleLight}
    ></button>
  )
}
