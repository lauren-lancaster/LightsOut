import Board from './Board'

export default function LightsOff() {
  return (
    <>
      <div className="App">
        <h1 className="App-h1">
          <span className="App-orange">LIGHTS</span>{' '}
          <span className="App-blue">OUT</span>
        </h1>
        <Board />
      </div>
    </>
  )
}
