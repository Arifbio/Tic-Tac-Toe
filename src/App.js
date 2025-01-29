import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){

    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={[0]} onSquareClick={handleClick}/>
        <Square value={[1]}/>
        <Square value={[2]}/>
      </div>
      <div className="board-row">
        <Square value={[3]}/>
        <Square value={[4]}/>
        <Square value={[5]}/>
      </div>
      <div className="board-row">
        <Square value={[6]}/>
        <Square value={[7]}/>
        <Square value={[8]}/>
      </div>
    </>
  );
}
