import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { configure } from '@testing-library/react';

const liff = window.liff

const init_liff = async () => {
    await liff.init({ liffId: '1653915952-Yw4P9v6J' })
    if (!liff.isLoggedIn()) liff.login({ redirectUri: Location.href })
    const _lineProfile = await liff.getProfile()
    console.log(`Profile : ${JSON.stringify(_lineProfile)}`)
}

init_liff()

const Square = (props) => {
    // const [value, setValue] = useState(null)
    console.log(`Square : ${props.value}`)
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}


const Board = () => {
    const [status, setStatus] = useState(false)
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        // if (squares[i] == null) {
        //     setStatus(!status)

        //     console.log(`handleClick ${i}`)

        //     let newSquares = [...squares]
        //     newSquares[i] = status ? 'X' : 'O'
        //     setSquares(newSquares)
        // }
        if (squares[i] != null) {
            return
        }

        console.log(`handleClick ${i}`)
        setStatus(!status)

        let newSquares = [...squares]
        newSquares[i] = status ? 'X' : 'O'
        setSquares(newSquares)
    }

    const renderSquare = (i) => {
        console.log(`renderSquare : ${i} = ${squares[i]}`)
        return (
            <Square
                onClick={() => {
                    handleClick(i)
                }}
                value={squares[i]}
            />
        )
    }

    return (
        <div>
            <div className="status">{status ? 'X' : 'O'}'s turn</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
