import GuessGame from './GuessGame';

function App() {
  return (
    <>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Boris Gratchev</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p>This is my personal website!</p>

          <div className="field-row">
            <input type="checkbox" id="box1" />
            <label htmlFor="box1">Check me</label>
          </div>

          <br />

          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>

      <br />

      <GuessGame />
    </>
  );
}

export default App;
