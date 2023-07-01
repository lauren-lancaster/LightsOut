import Cell from './Cell'
import { useState } from 'react'

function Board() {
  const size = 3
  const chanceLightStartsOn = 0.25

  const lightsGrid = Array(size)
    .fill(0)
    .map(
      (row) =>
        (row = Array(size)
          .fill(0)
          .map((cell) => (cell = randomLight())))
    )
  lightsGrid[1][1] = true

  function randomLight() {
    return Math.random() < chanceLightStartsOn
  }

  const [board, setBoard] = useState({ grid: lightsGrid })

  function toggleLight(cellIndex: string) {
    console.log('toggle: ', cellIndex)
    const stringCellIndex = String(cellIndex)
    let [cellRowIndex, cellColIndex] = stringCellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    setBoard((state) => ({
      ...state,
      grid: state.grid.map((row, rowIndex) =>
        rowIndex === numCellRowIndex
          ? row.map((col, colIndex) =>
              colIndex === numCellColIndex ? !col : col
            )
          : row
      ),
    }))
  }

  function toggleAllLights(cellIndex: string) {
    let [cellRowIndex, cellColIndex] = cellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    toggleLight(cellIndex)
    toggleLight([numCellRowIndex, numCellColIndex + 1].join(''))
    toggleLight([numCellRowIndex, numCellColIndex - 1].join(''))
    toggleLight([numCellRowIndex + 1, numCellColIndex].join(''))
    toggleLight([numCellRowIndex - 1, numCellColIndex].join(''))
  }

  function hasWon() {
    return board.grid.every((row) => row.every((cell) => !cell))
  }

  const gridDisplay = board.grid.map(function (row, rowIndex) {
    return (
      <div className="Board-row" key={rowIndex}>
        {row.map((col, colIndex) => (
          <Cell
            key={[rowIndex, colIndex].join('')}
            cellIndex={[rowIndex, colIndex].join('')}
            isOn={board.grid[rowIndex][colIndex]}
            toggleLight={toggleAllLights}
          />
        ))}
      </div>
    )
  })

  return (
    <div className="Board">
      {hasWon() ? (
        <div className="Board-hasWon">Congratulations!</div>
      ) : (
        gridDisplay
      )}
    </div>
  )
}

export default Board
