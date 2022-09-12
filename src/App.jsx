
//jshint esversion:6
import React,{useState} from "react";
import Board from "./components/Board.jsx";
import "./styles/root.scss";
import History from "./components/history.jsx";
import Statusmsg from "./components/statusmsg.jsx";
import {calculateWinner} from "./components/helpers.jsx";

export default () => {
//lets use useState reaact for better stage managemnt
//we will create a history states which will change it actually captures the game at every point nad let us have many functionality that can be added to the game


const initial=[ {board: new Array(9).fill(null)} ];

const [history,setHistory]=useState(initial);
const [now,next] =useState("x");
const [recent,updateRecent] =useState(0);


let current=history[recent];  //current state of the game to calculate the winner
const {winner,winningSquare}=calculateWinner(current.board);

const handleSquareClick=(pos) => {

  if(current.board[pos]==="x" || current.board[pos]==="0" || winner) {
      return;
  }

setHistory((prev) => {
  let boardnow=prev[prev.length-1];
  let k;
  if(now=="x") {
    k="x";
    next("0");
  }
  else {
    k="0";
    next("x");
  }
  let newBoard=boardnow.board.map((val,po) => {
    if(po==pos) {
      return k;
    }
    return val;
  });
    return prev.concat({board:newBoard});
});                //this works as the previous state

updateRecent(prev => prev+1);
};

const moveTo= (move) => {
    updateRecent(move);
}

const startingGame= () => {
  setHistory(initial);
  updateRecent(0);
  next("x");
}


return (<div className="app">
 <h1>Tic <span className="text-green">Tac</span> Toe</h1>
  <Statusmsg winner={winner} now={now} board={current.board} />
 <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare}/>
 <button type="submit" onClick={startingGame} className={`btn-reset ${ winner ? "active" : "" }`}>Start new Game</button>
 <h2 style={{fontWeight:'normal'}}>Current game history</h2>
 <History history={history} moveTo={moveTo}  currentMove={recent}/>
 <div className="bg-balls"/>
</div>);
}
