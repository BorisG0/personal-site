import axios from 'axios';

function GuessGame() {
    return (
        <>
            <div class="window">
                <div class="title-bar">
                    <div class="title-bar-text">Let's play a Game</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <pre>Microsoft&#10094;R&#10095; Windows DOS
                        &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
                        <br />C:&#92;WINDOWS&#92;SYSTEM32{">"} Try to guess my favourite number
                    </pre>
                </div>
            </div>

            <br />

            <div class="field-row">
                <label for="text21">Guess</label>
                <input id="text21" type="text" />
                <button>Send</button>
            </div>
            
        </>
    )
}

export default GuessGame;