import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  // console.log(stepNumber)
  // console.log(history)
  // console.log(history[stepNumber])
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    console.log(current)
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    
  };

  const jumpTo = (step) => {
    //console.log(step)
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Ir para jogada #${move}` : "Voltar para o início do jogo";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>Tic Tac Toe - Jogo da Velha</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="game-wrapper">
        <div>
          <h3>Histórico de jogadas</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Vencedor: " + winner : "Próximo a jogar: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;