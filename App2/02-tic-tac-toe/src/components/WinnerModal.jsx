import { Square } from "./square.jsx";

export function WinnerModal({winner, resetGame}) {
  if (winner === null) return null;

  const winnerText = winner === false ? "It's a draw!" : `Winner:`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
