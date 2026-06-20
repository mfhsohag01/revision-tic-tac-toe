export default function SquareFragment({ value, onSquareClick }) {
  const isX = value === "X";
  const isO = value === "O";

  return (
    <button
      onClick={onSquareClick}
      className={`
        relative h-20 w-20 m-1 rounded-2xl
        bg-slate-800/60 backdrop-blur-md
        border border-slate-600/50
        flex items-center justify-center
        text-4xl font-extrabold
        transition-all duration-200 ease-out
        hover:scale-105 hover:border-slate-400
        active:scale-95
        ${value ? "cursor-default" : "cursor-pointer hover:bg-slate-700/60"}
        ${isX ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" : ""}
        ${isO ? "text-fuchsia-400 drop-shadow-[0_0_12px_rgba(232,121,249,0.6)]" : ""}
      `}
    >
      <span
        className={`
          transition-transform duration-300
          ${value ? "scale-100 animate-[pop_0.3s_ease-out]" : "scale-0"}
        `}
      >
        {value}
      </span>
    </button>
  );
}
