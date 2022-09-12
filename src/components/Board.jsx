//jshint esversion:9
import React from "react";
import Square from "./Square"

const Board=({board,handleSquareClick,winningSquare}) => {


const renderSquare=(pos) => {
  const isWinningSquare=() => {
    return winningSquare.includes(pos);
  };
  return <Square value={board[pos]} clicker={() => {
    {handleSquareClick(pos)};
  }} isWinningSquare={isWinningSquare} />
}
  return (
    <>
    <div  className="board">
    <div className="board-row">
       {renderSquare(0)}
       {renderSquare(1)}
       {renderSquare(2)}
    </div>
    <div  className="board-row">
         {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}

    </div>
    <div  className="board-row">
         {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
    </div>
    </div>
    </>
  )
}
export default Board;
