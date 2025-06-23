type SudokuResult = { board: number[][]; solution: number[][]; };
export function generateSudoku(difficulty: string = "Easy"): SudokuResult {
  const easy = [ [5,3,0, 0,7,0, 0,0,0], [6,0,0, 1,9,5, 0,0,0], [0,9,8, 0,0,0, 0,6,0],
    [8,0,0, 0,6,0, 0,0,3], [4,0,0, 8,0,3, 0,0,1], [7,0,0, 0,2,0, 0,0,6],
    [0,6,0, 0,0,0, 2,8,0], [0,0,0, 4,1,9, 0,0,5], [0,0,0, 0,8,0, 0,7,9] ];
  const easySolution = [ [5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9] ];
  return { board: easy, solution: easySolution };
}
export function isBoardComplete(board: number[][]): boolean { return board.every(row => row.every(cell => cell !== 0)); }
export function checkSudoku(board: number[][]): boolean {
  for(let i=0;i<9;i++){
    const row = new Set<number>(), col = new Set<number>(), grid = new Set<number>();
    for(let j=0;j<9;j++){
      if(board[i][j]!==0) { if(row.has(board[i][j])) return false; row.add(board[i][j]); }
      if(board[j][i]!==0){ if(col.has(board[j][i])) return false; col.add(board[j][i]); }
      const r = 3*Math.floor(i/3)+Math.floor(j/3), c=3*(i%3)+(j%3);
      if(board[r][c]!==0){ if(grid.has(board[r][c])) return false; grid.add(board[r][c]); }
    }
  }
  return true;
}
