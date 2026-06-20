import { useState } from "react";
import Square from "./Square";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpToMove(move) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Go to the start`;
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpToMove(move)}
          className={`
            w-full text-left px-4 py-2 mb-1 rounded-lg
            text-sm font-medium
            transition-all duration-200
            ${
              move === currentMove
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/60 hover:text-white"
            }
          `}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 gap-8">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        <div>
          <Square
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 min-w-[220px]">
          <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3 px-1">
            Move History
          </h3>
          <ol className="space-y-1">{moves}</ol>
        </div>
      </div>
    </div>
  );
}
