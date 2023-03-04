import React from "react";

import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_ALLOWED,
} from "../../constants";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import Letters from "../Letters";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const blankWords = Array(NUM_OF_GUESSES_ALLOWED).fill();
const emptyWord = Array(NUM_OF_LETTERS_ALLOWED).fill({});

function Game() {
  const [words, setWords] = React.useState([]);
  const [status, setStatus] = React.useState("PLAYING");
  const letters = React.useMemo(() => {
    return words.reduce((acc, curr) => {
      curr.forEach(({ letter, status }) => {
        acc[letter] = status;
      });
      return acc;
    }, {});
  }, [words]);
  const handleSubmit = (word) => {
    const guess = checkGuess(word, answer);
    const hasWon = guess.every(({ status }) => status === "correct");
    if (words.length < 6) {
      setWords([...words, guess]);
      if (hasWon) {
        setStatus("WON");
      } else if (words.length === 5) {
        setStatus("LOST");
      }
    }
  };
  return (
    <>
      {status === "WON" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {words.length} guesses</strong>.
          </p>
        </div>
      ) : status === "LOST" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
      <div className="guess-results">
        {blankWords.map((_, i) => {
          const word = words[i] || emptyWord;
          return (
            <p key={i} className="guess">
              {word.map(({ letter, status = "" }, i) => (
                <span
                  key={i}
                  className={`${status ? "cell " + status : "cell"}`}
                >
                  {letter}
                </span>
              ))}
            </p>
          );
        })}
      </div>
      <Letters letters={letters} />
      <GameInput status={status} onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
