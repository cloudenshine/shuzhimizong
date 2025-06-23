import React from "react";
type Props = { gamesPlayed: number; completed: boolean; onNextLevel: () => void; };
const AchievementPanel: React.FC<Props> = ({ gamesPlayed, completed, onNextLevel }) => (
  <div style={{margin:"16px 0"}}>
    <div> <strong>累计闯关：</strong>{gamesPlayed} 局 </div>
    {completed && (<div style={{padding:"8px",color:"green"}}>🎉 恭喜完成本局！
      <button onClick={onNextLevel} style={{marginLeft:"1em"}}>挑战更高难度</button>
    </div>)}
  </div>
);
export default AchievementPanel;
