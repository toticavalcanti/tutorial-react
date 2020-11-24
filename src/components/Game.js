import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

const Game = props => {
  const initialHistory = [
    { squares: Array(9).fill(null) }
  ];
  const [history, setHistory] = useState(initialHistory);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  console.log(history)
  console.log(xIsNext)
  console.log(stepNumber)
  
  const handleClick = i => {
    const slicedHistory = history.slice(0, stepNumber + 1);
    const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1];
    const newSquares = [...finalStepInSlicedHistory.squares];
    console.log(newSquares)
    
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareAlreadyFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareAlreadyFilled) return;
    
    newSquares[i] = xIsNext ? 'X' : 'O';
    const newStep = { squares: newSquares };
    const newHistory = [...slicedHistory, newStep];
    
    setHistory(newHistory);
    setXIsNext(!xIsNext);
    setStepNumber(slicedHistory.length);
  };
  
  const moves = history.map((step, move) => {
    const description = Boolean(move)
      ? `Go to move #${move}`
      : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  
  const jumpTo = step => {
    setStepNumber(step);
    const isEvenStepNumber = step % 2 === 0;
    setXIsNext(isEvenStepNumber);
  };
  
  const currentStep = history[stepNumber];
  const winner = calculateWinner(currentStep.squares);
  
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentStep.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;