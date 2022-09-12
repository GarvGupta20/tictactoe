//jshint esversion:6
import React from "react";

const Square= ({value,clicker,isWinningSquare}) => {
  return (
    <>
    <button
     className={`square ${isWinningSquare() ? "winning" : ''} ${value =="x" ? "text-green" : "text-orange"}`}
     type="button" onClick={clicker}>{value}</button>
    </>
  )
}

export default Square;
