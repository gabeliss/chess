import React from 'react';
import './../styles/Chessboard.css';

const x = ['8', '7', '6', '5', '4', '3', '2', '1']
const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export default function Chessboard() {
 
    let board = []
    for (let i = 0; i < x.length; i++) {
        let row = []
        for (let j = 0; j < y.length; j++) {
            let tileClass = 'tile green';
            if ((i + j) % 2 === 1) {
                tileClass = 'tile white'
            }
            let tileContent = y[j] + x[i];
            row.push(
                <div className={tileClass}>{tileContent}</div>
            );
        }
        board.push(row);
    }

    return (
        <div className='chessboard'>{board}</div>
        //{board}
    )
    // return <div id="chessboard">{board}</div>
}