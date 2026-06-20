import SquareFragment from "./SquareFragment";

export default function Square({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = (
      <>
        Winner is{" "}
        <span
          className={
            winner === "X"
              ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              : "text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.6)]"
          }
        >
          {winner}
        </span>
      </>
    );
  } else {
    status = (
      <>
        Next player{" "}
        <span
          className={
            xIsNext
              ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              : "text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.6)]"
          }
        >
          {xIsNext ? "X" : "O"}
        </span>
      </>
    );
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="text-2xl font-bold text-white mb-4">{status}</div>
      <div className="flex flex-row">
        <SquareFragment
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <SquareFragment
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <SquareFragment
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="flex flex-row">
        <SquareFragment
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <SquareFragment
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <SquareFragment
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="flex flex-row">
        <SquareFragment
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <SquareFragment
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <SquareFragment
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
