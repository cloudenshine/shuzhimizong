import React from "react";
const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard", "Expert"] as const;
type Props = { currDiff: string; onChangeDiff: (d: typeof DIFFICULTY_LEVELS[number]) => void; onRestart: () => void; };
const ControlPanel: React.FC<Props> = ({ currDiff, onChangeDiff, onRestart }) => (
  <div style={{marginLeft:4,marginBottom:10}}>
    <label>难度选择：</label>
    <select value={currDiff} onChange={e => onChangeDiff(e.target.value as any)}>
      {DIFFICULTY_LEVELS.map(lvl => <option value={lvl} key={lvl}>{lvl}</option>)}
    </select>
    <button onClick={onRestart} style={{marginLeft:8}}>新一局</button>
  </div>
);
export default ControlPanel;
