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

  function toggleLight(cellIndex) {
    let [cellRowIndex, cellColIndex] = cellIndex.split('')
    cellRowIndex = Number(cellRowIndex)
    cellColIndex = Number(cellColIndex)

    setBoard((state) => ({
      ...state,
      grid: state.grid.map((row, rowIndex) =>
        rowIndex === cellRowIndex
          ? row.map((col, colIndex) => (colIndex === cellColIndex ? !col : col))
          : row
      ),
    }))
  }

  function toggleAllLights(cellIndex) {
    let [cellRowIndex, cellColIndex] = cellIndex.split('')
    cellRowIndex = Number(cellRowIndex)
    cellColIndex = Number(cellColIndex)

    toggleLight(cellIndex)
    toggleLight([cellRowIndex, cellColIndex + 1].join(''))
    toggleLight([cellRowIndex, cellColIndex - 1].join(''))
    toggleLight([cellRowIndex + 1, cellColIndex].join(''))
    toggleLight([cellRowIndex - 1, cellColIndex].join(''))
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
