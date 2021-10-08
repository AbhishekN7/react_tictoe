import React , {useState} from 'react';
import { Board } from '../Board/Board';
import { ResultModal } from '../Result/ResultModal';
import { calculateWinner } from '../../ultis/winnerCalculator';
import './Game.css';

export const Game = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [xIsNext , setxIsNext] = useState(true);
    const [isGameOver , setisGameOver] = useState(false);
    const [turnsLeft, setturnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [winningCombination,setWinningCombination] = useState([]);

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () =>{
        setCellValues(['','','','','','','','','']);
        setxIsNext(!xIsNext);
        setisGameOver(false);
        setturnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);

    };

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

        const newTurnsLeft = turnsLeft - 1;

        //Calculate the result
        const calcResut = calculateWinner(newCellValues,newTurnsLeft,cellIndex)
        setCellValues(newCellValues);
        setxIsNext(!xIsNext);
        setisGameOver(calcResut.hasResult);
        setturnsLeft(newTurnsLeft);
        setWinner(calcResut.winner);
        setWinningCombination(calcResut.winningCombination);
        }
    };

    return (
        <>
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board 
                cellValues={cellValues}
                winningCombination={winningCombination}
                cellClicked = {onCellClicked}
                />
            </div>
            <ResultModal
            isGameOver ={isGameOver} 
            winner ={winner}
            onNewGameClicked = {restartGame}
            />

        </>
    )
}