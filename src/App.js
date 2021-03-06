import React, {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";
const App = () => {

    const [history, setHistory] = useState( [{board:Array(9).fill(null), isXNext:true}] )

    const [currentMove, setCurrentMove] = useState(0)
    const current = history[currentMove];
    const winner = calculateWinner(current.board)
    const handleSquareClick = (position) =>{
    
        if(current.board[position] || winner){
            return
        }
        setHistory((prev)=>{
            const last = prev[prev.length - 1];
            const newBoard = last.board.map((square, pos)=>{
                if(pos == position){
                    return last.isXNext? 'X':"0";
                }
                return square;
            })
            return prev.concat({board: newBoard, isXNext:!last.isXNext})
    })
    setCurrentMove((prev)=>prev+1)

    

}
const startNewGame = ()=>{
  setHistory([{board:Array(9).fill(null), isXNext:true}])
  setCurrentMove(0)
}
  const moveTo = move=>{
    setCurrentMove(move)
  }
  return(
  <div className="app">
    <h2 style={
      {
        color: "#fff"
      }
    }>TICTACTOE</h2>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winner={winner} />
    <button type="button" className="startNewGame" onClick={startNewGame}>Start new game</button>
    <History history={history} moveTo={moveTo} currentMove = {currentMove}/>
  </div>
  );
};

export default App;
