import React , {useState} from 'react';
import { Board } from '../Board/Board';
import { ResultModal } from '../Result/ResultModal';
import './Game.css';

export const Game = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [xIsNext , setxIsNext] = useState(true);
    const [isGameOver , setisGameOver] = useState(false);
    const winningCombination = [];

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

        //Calculate the result
        const calcResut = calculateWinner(newCellValues,cellIndex)
        setCellValues(newCellValues);
        setxIsNext(!xIsNext);
        setisGameOver(calcResut);
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
            isGameOver ={isGameOver} />

        </>
    )
}