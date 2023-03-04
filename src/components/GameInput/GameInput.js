import React from "react";

function GameInput({ onSubmit, status }) {
  const [word, setWord] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setWord("");
    onSubmit(word);
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== "PLAYING"}
        id="guess-input"
        type="text"
        maxLength={5}
        pattern="[A-Z]{5}"
        minLength={5}
        onChange={(e) => {
          const val = e.target.value;
          if (val.match(/^[A-Za-z]*$/)) {
            setWord(val.toUpperCase());
          }
        }}
        value={word}
      />
    </form>
  );
}

export default GameInput;
