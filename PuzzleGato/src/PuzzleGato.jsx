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
  <div style={{ background: "red", height: "100vh", color: "white" }}>
    FUNCIONA
  </div>
);
}