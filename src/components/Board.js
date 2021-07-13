import React from 'react'
import Square from './Square'

const Board = ({board,handleSquareClick, winner}) => {

    
    const renderSquare = (position)=>{
        var win = false
        if (winner){
            for(var i=0;i<winner.length;i++){
                if(board[position] == winner[i]){
                    win = true
                }
            }
        }
        return(
        <Square classs={win} value = {board[position]} onClick = {()=>
                    handleSquareClick(position)
                }/>
        )
    };
    return (
        <div className="board">
            <div className="board-row">
                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }
            </div>
            <div className="board-row">
                { renderSquare(3) }
                { renderSquare(4) }
                { renderSquare(5) }
            </div>
            <div className="board-row">
                { renderSquare(6) }
                { renderSquare(7) }
                { renderSquare(8) }
            </div>
        </div>
    )
}

export default Board
