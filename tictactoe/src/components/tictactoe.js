import React from 'react';
import { useEffect, useState } from "react";

import './styles.css';

function timer(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while(currentDate - date < milliseconds);
};

const players = {
    CPU: {
        SYM: "O",
        NAME: "CPU",
    },
    HUMAN: {
        SYM: "X",
        NAME: "You"
    },
};

export default function TicTacToe() {
    // const board = useState(Arrat(9).fill(""));
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    // allows players to play when clicking on it and checks if the game is over
    function playFunction(arrayIndex, index) {
        if (isCPUNext) return;
        if (winner) return;
        board[arrayIndex][index] = players?.HUMAN?.SYM
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(true);
    }

    // checks if the game is over; if not, it'll check if it is the CPU's turn
    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            cpuPlay();
        };
    }, [isCPUNext]);

    // checks if game is over, if not, it'll call for the CPU's move
    function cpuPlay() {
        if (winner) return; 
        timer(1000);

        const cpuMove = cpuTurn(); 

        board[cpuMove.arrayIndex][cpuMove.index] = players.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner(); 
        setIsCPUNext(false);
    }

    //CPU turn
    function cpuTurn() {
        const emptyIndex = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === "") {
                    emptyIndex.push({arrayIndex, index});
                };
            });
        });

        const randomIndex = Math.floor(Math.random() * emptyIndex.length);
        return emptyIndex[randomIndex];
    }

    //checks for the winner
    function checkWinner() {

        // checks columns 
        for (let i = 0; i < 3; i++) {
            const column = board.map((row) => row[i]);
            if (column.every((cell) => cell  === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            };
        };

        // checks rows
        for (let index = 0; index <board.length; index++) {
            const row = board[index];
            
            if (row.every((cell) => cell === players?.CPU.SYM)) {
                setWinner(players?.CPU?.SYM); 
                return;
            } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            };
        };

        // checks diagonals 
        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];

        if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (board.flat().every((cell) => cell !== "")) {
            setWinner("draw")
            return;
        } else {
            setWinner(null);
            return;
        }

    };

    function displayWinner() {
        if (winner === "draw") {
            return "It's a draw!";
        } else if (winner) {
            return `${winner} won!`
        };
    };

    function displayTurn() {
        if (isCPUNext) {
            return "CPU's turn";
        } else {
            return "Your turn";
        };
    };

    function reset() {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner(null);
        setIsCPUNext(false);
    };
    

    return (
        <div className = 'container'>
            <h1 className = 'text-center mt-4'>Tic Tac Toe</h1>
            <div>
                <p className='text-center mt-4'><strong>Instructions</strong>: You are Player X and the CPU is Player O. Place your tile onto the board by clicking the space. Three in a row wins. Good luck!</p>
            </div>
            <div className = 'text-left'>{!winner && displayTurn()}</div>
            <div>
                <div className = 'column'>
                    <span onClick ={() => playFunction(0,0)} className = 'cell'>
                        {board[0][0]}
                    </span>
                    <span onClick ={() => playFunction(0,1)} className = 'cell'>
                        {board[0][1]}
                    </span>
                    <span onClick ={() => playFunction(0,2)} className = 'cell'>
                        {board[0][2]}
                    </span>
                </div>
                <div className = 'column'>
                    <span onClick ={() => playFunction(1,0)} className = 'cell'>
                        {board[1][0]}
                    </span>
                    <span onClick ={() => playFunction(1,1)} className = 'cell'>
                        {board[1][1]}
                    </span>
                    <span onClick ={() => playFunction(1,2)} className = 'cell'>
                        {board[1][2]}
                    </span>
                </div>
                <div className = 'column'>
                    <span onClick ={() => playFunction(2,0)} className = 'cell'>
                        {board[2][0]}
                    </span>
                    <span onClick ={() => playFunction(2,1)} className = 'cell'>
                        {board[2][1]}
                    </span>
                    <span onClick ={() => playFunction(2,2)} className = 'cell'>
                        {board[2][2]}
                    </span>
                </div>
                
            </div>

            {winner && <h2>{displayWinner()}</h2>}
            <br />
                <button className = 'btn-info reset' onClick = {reset}>
                    Reset
                </button>
            
            
        </div>
    );

};