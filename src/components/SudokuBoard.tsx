import React, { useState } from "react";
import { checkSudoku, isBoardComplete } from "../utils/sudoku";
type Props = { initialBoard: number[][]; solution: number[][]; editable: boolean; onComplete: () => void; completed: boolean; };
const SudokuBoard: React.FC<Props> = ({ initialBoard, solution, editable, onComplete, completed }) => {
  const [board, setBoard] = useState(initialBoard.map(r => [...r]));
  function handleInput(row: number, col: number, value: string) {
    if (!editable || initialBoard[row][col] !== 0 || completed) return;
    const val = Number(value); if (val < 1 || val > 9) return;
    const newBoard = board.map(r => [...r]); newBoard[row][col] = val;
    setBoard(newBoard); if (isBoardComplete(newBoard) && checkSudoku(newBoard)) onComplete();
  }
  return (<div style={{display:"grid",gridTemplateRows:"repeat(9,1fr)",border:"2px solid #444"}}>
    {board.map((rowArr, rIdx) => <div style={{display:"flex"}} key={rIdx}>
      {rowArr.map((cell, cIdx) => (<input key={cIdx}
        style={{width:36, height:36, textAlign:"center", border: (rIdx%3===2&&rIdx!==8?"2px solid #999":"1px solid #ccc")+" "+(cIdx%3===2&&cIdx!==8?"2px solid #999":"1px solid #ccc"),
        background: initialBoard[rIdx][cIdx]===0 ? "#fff" : "#f7f9fb", fontWeight: initialBoard[rIdx][cIdx]===0 ? "bold" : "normal"}}
        type="text" maxLength={1} value={cell===0 ? "" : cell}
        onChange={e=>handleInput(rIdx, cIdx, e.target.value)} disabled={initialBoard[rIdx][cIdx]!==0||completed} />))}
    </div>))}
  </div>);
}; export default SudokuBoard;
