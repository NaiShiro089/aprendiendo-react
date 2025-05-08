import { Square } from "./square.jsx";

export function BoardModal({ board, updateBoard }) {
  return board.map((_, index) => (
      <Square key={index} index={index} updateBoard={updateBoard}>
        {board[index]}
      </Square>
  ));
}
