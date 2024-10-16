import GuessGame from './GuessGame';
import React, { useState } from 'react';
import portraitImage from './images/portait.jpeg'

function App() {
  const [activeTab, setActiveTab] = useState('start');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

          <menu role="tablist">
            <button role="tab" aria-controls="start" aria-selected={activeTab == 'start'}
              onClick={() => handleTabClick('start')}>Start</button>
            <button role="tab" aria-controls="portrait" aria-selected={activeTab == 'portrait'}
              onClick={() => handleTabClick('portrait')}>Portrait</button>
          </menu>

          <article role="tabpanel" id="start" hidden={activeTab !== 'start'}>
            <p>This is my personal website!</p>

            <div className="field-row">
              <input type="checkbox" id="box1" />
              <label htmlFor="box1">Check me</label>
            </div>
          </article>

          <article role="tabpanel" hidden={activeTab !== 'portrait'} id="portrait">
            my portrait
            <br/>
            <img src={portraitImage} style={{ width: '30%' }}/>
          </article>

          <section className="field-row" style={{ justifyContent: 'flex-end' }}>
            <button>OK</button>
            <button>Cancel</button>
          </section>

        </div>
      </div>

      <br />

      <GuessGame />

      <br />

      <progress></progress>
    </>
  );
}

export default App;
