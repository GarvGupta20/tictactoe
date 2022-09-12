//jshint esversion:9
import React from "react" ;


export default ({history,moveTo,currentMove})=> {     //moveTo function contains the logic for the traversing back to a move
  return (
    <>
    <div className="history-wrapper">
    <ul className="history">
     {
       history.map((_,move) => {
         return (
           <li key={move}>
<button type="submit" className={`btn-move ${move===currentMove ? 'active' : ''}`} onClick={() => {moveTo(move)}}>{move ===0 ? "Go to game start": `Go to move ${move}`}</button>
           </li>
         );
       })
     }
    </ul>
    </div>
    </>
  );
};
