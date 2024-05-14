import React from "react"

function GuessInput() {
    const [guess, setGuess] = React.useState("")
    const [guessHistory, setGuessHistory] = React.useState([])
    const handleSubmitGuess = (event) => {
        event.preventDefault()
        // do something here
        console.log(guess)

        const nextGuessHistory = [...guessHistory]
        nextGuessHistory.push({
            value: guess,
            key: crypto.randomUUID(),
        })
        setGuessHistory(nextGuessHistory)

        setGuess("")
    }

    return (
        <>
            <div class="guess-results">
                {guessHistory.map((guess) => (
                    <p class="guess" key={guess.key}>
                        {guess.value}
                    </p>
                ))}
            </div>
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
        </>
    )
}

export default GuessInput
