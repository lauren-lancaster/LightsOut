import { useState } from 'react'

interface Props {
  cellIndex: string
  isOn: boolean
  toggleLight: any
}

export default function Cell(props: Props) {
  const { cellIndex, isOn, toggleLight } = props
  const [count, setCount] = useState(0)

  function handleToggleLight() {
    toggleLight(cellIndex)
  }

  const incCounter = () => {
    setCount(count + 1)
    if (count >= 15) {
      youDied()
    } else {
      handleToggleLight()
    }
  }

  function youDied() {
    console.log('death')
    return (
      <>
        <h1>You DIED</h1>
        <p>Implement a LINK to new route path</p>
      </>
    )
  }

  return (
    <button
      className={isOn ? 'Cell-on' : 'Cell-off'}
      onClick={handleToggleLight}
    ></button>
  )
}
