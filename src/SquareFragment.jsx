export default function SquareFragment({ value, onSquareClick }) {
  return (
    <>
      <button
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-7 tex-lg"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
