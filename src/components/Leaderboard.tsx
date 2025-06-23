import React from "react";
type Props = { gamesPlayed: number; completed: boolean; };
const leaderboard = [ { name: "你", score: 100 }, { name: "玩家A", score: 80 }, { name: "玩家B", score: 75 } ];
const Leaderboard: React.FC<Props> = ({ gamesPlayed, completed }) => (
  <div style={{marginTop:12,padding:12,background:"#f4f6f8",borderRadius:8}}>
    <strong>排行榜</strong>
    <ol>
      {leaderboard.map((item, i) => ( <li key={item.name}>{item.name} - {item.score}分</li> ))}
    </ol>
    <div style={{fontSize:12,color:"#888"}}>（完成更多局数可获得更高排名）</div>
  </div>
);
export default Leaderboard;
