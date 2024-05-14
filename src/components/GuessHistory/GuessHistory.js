import React from "react"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessHistory({ guessHistory }) {
  const getCharFromHistory = (row, col) => {
    if (row < guessHistory.length) {
      return guessHistory[row].result[col]
    }
    return ""
  }

  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p class="guess" key={row}>
          {range(0, 5).map((col) => (
            <span
              key={`${row}=${col}`}
              class={`cell ${getCharFromHistory(row, col).status}`}
            >
              {getCharFromHistory(row, col).letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessHistory
