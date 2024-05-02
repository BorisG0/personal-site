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
        </div>
      </div>
    </>
  );
}

export default App;
