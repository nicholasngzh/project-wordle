import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "../GuessInput/GuessInput"

// Pick a random word on every pageload.
// const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  console.info({ answer })

  const generateNewAnswer = () => {
    setAnswer(sample(WORDS))
  }
  return (
    <>
      <GuessInput answer={answer} generateNewAnswer={generateNewAnswer} />
    </>
  )
}

export default Game
