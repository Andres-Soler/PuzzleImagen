import { useState, useEffect } from "react";
import gato from "./gato.jpg"; // 🔥 IMPORTAR
import "./PuzzleGato.css";

const columns = 8;

export default function PuzzleGato() {

  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const arr = [...Array(columns).keys()];
    setPieces(arr.sort(() => Math.random() - 0.5));
  }, []);

  const solved =
    pieces.length === columns &&
    pieces.every((piece, index) => piece === index);

  function swap(i, j) {
    const newPieces = [...pieces];
    [newPieces[i], newPieces[j]] = [newPieces[j], newPieces[i]];
    setPieces(newPieces);
  }

  return (
    <div className="puzzle-container">

      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>

      <div className="game-card">
        <h2>Puzzle Gato 🐱</h2>

        <div className={`puzzle-row ${solved ? "solved" : ""}`}>
          {pieces.map((piece, index) => (
            <div
              key={index}
              className="puzzle-piece"
              onClick={() => swap(index, (index + 1) % columns)}
              style={{
                width: `${100 / columns}%`,
                backgroundImage: `url(${gato})`, // 🔥 USAR IMPORT
                backgroundSize: `${columns * 100}% 100%`,
                backgroundPosition: `${(piece * 100) / (columns - 1)}% 0`
              }}
            />
          ))}
        </div>

        {solved && <h3>🎉 ¡Lo resolviste!</h3>}
      </div>

    </div>
  );
}