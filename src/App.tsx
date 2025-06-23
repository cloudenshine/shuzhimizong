import React, { useState } from "react";
import SudokuBoard from "./components/SudokuBoard";
import ControlPanel from "./components/ControlPanel";
import AchievementPanel from "./components/AchievementPanel";
import Leaderboard from "./components/Leaderboard";
import { generateSudoku } from "./utils/sudoku";

const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard", "Expert"] as const;

const App: React.FC = () => {
  const [difficulty, setDifficulty] = useState<(typeof DIFFICULTY_LEVELS)[number]>("Easy");
  const [puzzle, setPuzzle] = useState(() => generateSudoku(difficulty));
  const [solution, setSolution] = useState(puzzle.solution);
  const [completed, setCompleted] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const handleRestart = () => {
    const newPuzzle = generateSudoku(difficulty);
    setPuzzle(newPuzzle);
    setSolution(newPuzzle.solution);
    setCompleted(false);
    setGamesPlayed(g => g + 1);
  };

  const handleNextLevel = () => {
    const idx = DIFFICULTY_LEVELS.indexOf(difficulty);
    const nextDifficulty = DIFFICULTY_LEVELS[Math.min(idx + 1, DIFFICULTY_LEVELS.length - 1)];
    setDifficulty(nextDifficulty);
    const newPuzzle = generateSudoku(nextDifficulty);
    setPuzzle(newPuzzle);
    setSolution(newPuzzle.solution);
    setCompleted(false);
    setGamesPlayed(g => g + 1);
  };

  return (
    <div style={{padding:"2em", maxWidth:500, margin:"auto"}}>
      <h1>数智迷踪 • Sudoku</h1>
      <ControlPanel
        currDiff={difficulty}
        onChangeDiff={diff => {
          setDifficulty(diff);
          const newPuzzle = generateSudoku(diff);
          setPuzzle(newPuzzle);
          setSolution(newPuzzle.solution);
          setCompleted(false);
        }}
        onRestart={handleRestart}
      />
      <SudokuBoard
        initialBoard={puzzle.board}
        solution={solution}
        editable={true}
        onComplete={() => setCompleted(true)}
        completed={completed}
      />
      <AchievementPanel gamesPlayed={gamesPlayed} completed={completed} onNextLevel={handleNextLevel} />
      <Leaderboard completed={completed} gamesPlayed={gamesPlayed} />
      <div style={{marginTop:24, fontSize:12, color:"#aaa"}}>
        © 2025 Sudoku | 开源参考 egfanboy/react-sudoku，sudokio.vercel.app
      </div>
    </div>
  );
};

export default App;
