import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GuessGame() {

    const [inputValue, setInputValue] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const addToGuessHistory = (guess) => {
        console.log('Adding to guess history:', guess);
        setGuessHistory([...guessHistory, guess]);
        console.log('Guess history:', guessHistory);
    }

    const sendGuess = async (guess) => {
        try {
            
            const response = await axios.post('http://localhost:8080/guess', { number: guess});
            // const response = await axios.get('http://localhost:8080/');
            console.log('Response:', response.data);
            setGuessHistory([...guessHistory, {number: guess, response: response.data}]);
        } catch (error) {
            console.error('Error sending guess:', error);
        }
    };

    const handleButtonClick = () => {
        console.log('input value: ' + inputValue)
        sendGuess(Number(inputValue));
    };

    return (
        <>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Let's play a Game</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <pre>Microsoft&#10094;R&#10095; Windows DOS
                        &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
                        <br/>
                        <br />Try to guess my favourite number
                        {guessHistory.map((guess, index) => (
                            <div key={index}>
                                C:&#92;WINDOWS&#92;SYSTEM32{">"}{guess.number}
                                <br/>{guess.response}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>

            <br />

            <div className="field-row">
                <label htmlFor="text1">Guess</label>
                <input id="text1" type="text" value={inputValue} onChange={handleInputValue} />
                <button onClick={handleButtonClick}>Send</button>
            </div>

        </>
    )
}

export default GuessGame;