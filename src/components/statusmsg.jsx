//jshint esversion:6
import React from "react";

export default ({winner,now,board})=> {


  const m=board.every((val) => val!=null);
  return (
    <>
    <div>
    <h2>

     {winner &&
       <>
       Winner is <span className={winner=="x" ? 'text-green' : 'text-orange'}>{winner}</span>
       </>
     }
     {!winner && m &&
       <>
        The draw
       </>
     }
     {!winner && !m &&
       <>
       Next Move will be of <span className={now=="x" ? 'text-green' : 'text-orange'}>{now}</span>
       </>
     }
    </h2>
    </div>
    </>
  );
}
