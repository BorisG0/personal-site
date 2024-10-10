import GuessGame from './GuessGame';

function App() {
  return (
    <>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">Boris Gratchev</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <p>This is my personal website!</p>

          <div class="field-row">
            <input type="checkbox" id="box1" />
            <label for="box1">Check me</label>
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
