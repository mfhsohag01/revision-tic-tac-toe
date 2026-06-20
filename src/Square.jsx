import { useState } from "react";
import SquareFragment from "./SquareFragment";

export default function Square() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="flex flex-row">
        <SquareFragment value={squares[0]} />
        <SquareFragment value={squares[1]} />
        <SquareFragment value={squares[2]} />
      </div>
      <div className="flex flex-row">
        <SquareFragment value={squares[3]} />
        <SquareFragment value={squares[4]} />
        <SquareFragment value={squares[5]} />
      </div>
      <div className="flex flex-row">
        <SquareFragment value={squares[6]} />
        <SquareFragment value={squares[7]} />
        <SquareFragment value={squares[8]} />
      </div>
    </>
  );
}
