import React from 'react';
import { Cell } from '../Cell/Cell'
import './Board.css';

export const Board = () => {
    return (
            <div id="board">
                <Cell value="X"/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value=""/>
                <Cell value="O"/>
            </div>
    )
}