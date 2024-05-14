import React from "react"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessHistory({ guessHistory }) {
  const getCharFromHistory = (row, col) => {
    if (row < guessHistory.length) {
      return guessHistory[row].value[col]
    }
    return ""
  }

  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p class="guess" key={row}>
          {range(0, 5).map((col) => (
            <span class="cell">{getCharFromHistory(row, col)}</span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessHistory
