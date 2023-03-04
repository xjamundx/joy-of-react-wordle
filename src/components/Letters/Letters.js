function Letters({ letters }) {
  return (
    <div className="letters">
      <div className="letters-row">
        <div className={`letter ${letters["Q"]}`}>Q</div>
        <div className={`letter ${letters["W"]}`}>W</div>
        <div className={`letter ${letters["E"]}`}>E</div>
        <div className={`letter ${letters["R"]}`}>R</div>
        <div className={`letter ${letters["T"]}`}>T</div>
        <div className={`letter ${letters["Y"]}`}>Y</div>
        <div className={`letter ${letters["U"]}`}>U</div>
        <div className={`letter ${letters["I"]}`}>I</div>
        <div className={`letter ${letters["O"]}`}>O</div>
        <div className={`letter ${letters["P"]}`}>P</div>
      </div>
      <div className="letters-row">
        <div className={`letter ${letters["A"]}`}>A</div>
        <div className={`letter ${letters["S"]}`}>S</div>
        <div className={`letter ${letters["D"]}`}>D</div>
        <div className={`letter ${letters["F"]}`}>F</div>
        <div className={`letter ${letters["G"]}`}>G</div>
        <div className={`letter ${letters["H"]}`}>H</div>
        <div className={`letter ${letters["J"]}`}>J</div>
        <div className={`letter ${letters["K"]}`}>K</div>
        <div className={`letter ${letters["L"]}`}>L</div>
      </div>
      <div className="letters-row">
        <div className={`letter ${letters["Z"]}`}>Z</div>
        <div className={`letter ${letters["X"]}`}>X</div>
        <div className={`letter ${letters["C"]}`}>C</div>
        <div className={`letter ${letters["V"]}`}>V</div>
        <div className={`letter ${letters["B"]}`}>B</div>
        <div className={`letter ${letters["N"]}`}>N</div>
        <div className={`letter ${letters["M"]}`}>M</div>
      </div>
    </div>
  );
}

export default Letters;
