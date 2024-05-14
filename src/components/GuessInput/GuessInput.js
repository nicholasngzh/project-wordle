import React from "react"
import GuessHistory from "../GuessHistory/GuessHistory"
import { checkGuess } from "../../game-helpers"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessInput({ answer, generateNewAnswer }) {
  const [guess, setGuess] = React.useState("")
  const [guessHistory, setGuessHistory] = React.useState([])
  const handleSubmitGuess = (event) => {
    event.preventDefault()
    // do something here
    console.log(guess)

    const nextGuessHistory = [...guessHistory]
    nextGuessHistory.push({
      value: guess,
      result: checkGuess(guess, answer),
      key: crypto.randomUUID(),
    })
    setGuessHistory(nextGuessHistory)

    setGuess("")
  }

  const foundCorrectAnswer = guessHistory.find(
    (guess) => guess.value === answer
  )

  const handleRestart = () => {
    setGuess("")
    setGuessHistory([])
    generateNewAnswer()
  }

  return (
    <>
      <div class="guess-results">
        <GuessHistory guessHistory={guessHistory} />
      </div>
      {foundCorrectAnswer ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessHistory.length} guesses</strong>.
          </p>
          <button onClick={handleRestart}>Click here to Restart</button>
        </div>
      ) : guessHistory.length >= NUM_OF_GUESSES_ALLOWED ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={handleRestart}>Click here to Restart</button>
        </div>
      ) : (
        <form class="guess-input-wrapper" onSubmit={handleSubmitGuess}>
          <label for="guess-input">Enter guess:</label>
          <input
            id="guess-input"
            type="text"
            value={guess}
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            onChange={(event) => {
              setGuess(event.target.value.toUpperCase())
            }}
          />
        </form>
      )}
    </>
  )
}

export default GuessInput
