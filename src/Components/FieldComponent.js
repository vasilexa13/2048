
import React from "react";
import Square from "./SquareComponent";
import Header from "../Header/Header";
import { useState } from "react";
import { handleKeyDown, randomNumForInput } from "../App";

const arrOfData = {};

function Field(props) {

    const [squares, setSquares] = useState(Array(16).fill(null));//!передача состояния Field компоненту
    function handleKey(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = randomNumForInput();
        setSquares(nextSquares);
    }

    let fieldSize = +props.fieldSize;//приём размеров поля через props
    fieldSize = 4;

    let arrRow = [];
    let arrField = [];
    for (let i = 0; i < fieldSize ** 2; i++) {
        arrField[i] = <Square key={i} index={i} value={squares[i]} onSquareClick={() => handleKey(i)}></Square>


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











