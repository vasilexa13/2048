
import React from "react";
import Square from "./SquareComponent";
import Header from "../Header/Header";
import { useState } from "react";
import { handleKeyDown } from "../App";
import { gamestatus } from "../functionsAndConst/const";
import { seachElement } from "../App";
import { randomNumForInput, randomIndex } from "../functionsAndConst/functions";


const arrOfData = {};

function Field(props) {
    const [squares, setSquares] = useState(Array(16).fill(null));//!передача состояния Field компоненту
    const nextSquares = squares.slice();// 

    function gameOver(nextSquares) {
        let gameStatusFlag = 1;
        if (nextSquares.includes(null) == false) {
            gameStatusFlag = 0;

        }
        return (gamestatus[gameStatusFlag]);
    }

    function handleKey(i) {
        // const nextSquares = squares.slice();

        // while (nextSquares.includes(null) ) {
        if (nextSquares[i] == null) {
            nextSquares[i] = randomNumForInput();
            setSquares(nextSquares)
            console.log('nextSquares', nextSquares);
            console.log('nextSquares[i]', nextSquares[i]);
        }
        else {
            handleKey(randomIndex())//рекурсия
            console.log(`поле ${i} со значением ${nextSquares[i]} существует`);
            // }
        }
        console.log('nextSquares.includes(null)', nextSquares.includes(null));



        let statusGame = gameOver(nextSquares)
        // console.log("props-", props);
        // console.log('status-', status);
        props.abc(statusGame);


    }

    let fieldSize = +props.fieldSize;//приём размеров поля через props
    fieldSize = 4;

    let arrRow = [];
    let arrField = [];
    for (let i = 0; i < fieldSize ** 2; i++) {
        arrField[i] = <Square key={i} index={i} value={squares[i]} onSquareClick={() => handleKey(randomIndex())}></Square>


        // for (let j = 0; j < fieldSize; j++) {
        //     arrRow[i, j] = (<Square key={String(i) + String(j)} index={String(i) + String(j)}  ></Square >);
        //     arrOfData[String(i) + String(j)] = null;
        // }
        // arrField.push(arrRow);
        // arrRow = [];

    }

    return (

        <div className="field" >
            <React.Fragment >
                {arrField}
            </React.Fragment>
        </div>
    );

}
export const arrField = () => arrField;

export default Field;











