
import React from "react";
import Square from "./SquareComponent";
import Header from "../Header/Header";
import { useState } from "react";
import { handleKeyDown } from "../App";
import { gamestatus, keysArr } from "../functionsAndConst/const";
import { seachElement } from "../App";
import { randomNumForInput, randomIndex } from "../functionsAndConst/functions";


const arrOfData = {};

function Field(props) {

    // const [squares, setSquares] = useState(Array(4).fill(Array(4).fill(null)));//!передача состояния Field компоненту ТАКОЕ ЗАПОЛНЕНИЕ НЕ РАБОТАЕТ
    const [squares, setSquares] = useState(Array([null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]));//!передача состояния Field компоненту
    const nextSquares = squares.slice(0);

    let fieldSize = +props.fieldSize;//приём размеров поля через props
    fieldSize = 4;

    let arrRow = [];
    let arrField = [];
    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize; j++) {
            arrRow[j] = <Square key={`${i}${j}`} value={squares[i][j]} onSquareClick={(event) => handleKey(randomIndex(), randomIndex(), event)
            }></Square >
        }
        arrField.push(arrRow);
        arrRow = [];
    }

    function gameOver(nextSquares) {
        let gameStatusFlag = 1;
        //   !!!УСЛОВИЕ ОКОНЧАНИЯ ИГРЫ БУДЕТ ДРУГОЕ!!!
        // for (let i = 0; i < fieldSize; i++) {
        //     if (nextSquares[i].includes(null) == false) {
        //         gameStatusFlag = 0;
        //     }

        // }

        return (gamestatus[gameStatusFlag]);
    }

    function handleKey(i, j, event) {

        function showingFieldItem() {
            if (nextSquares[i][j] == null) {
                nextSquares[i][j] = randomNumForInput();
                setSquares(nextSquares);
            }
            else {
                handleKey(randomIndex(), randomIndex(), event)//рекурсия
            }
        }
        setTimeout(showingFieldItem, 0);


        let statusGame = gameOver(nextSquares)
        props.abc(statusGame);




        // ДВИЖЕНИЕ КУБИКОВ   

        function moveKey() {
            // console.log('event.keyCode', event.keyCode);
            if (event.keyCode == keysArr.right) {
                keyRightMove();
                function keyRightMove() {
                    for (let y = 0; y < 4; y++) {
                        let raw = [...nextSquares[y].filter((item) => (item != null))];
                        for (let index = raw.length - 1; index >= 0; index--) {
                            if ((raw[index] === raw[index - 1]) && (raw.length >= 2)) {
                                raw[index] = raw[index] * 2;
                                // raw.splice((index - 1), 1);
                                raw[index - 1] = null;
                                raw = raw.filter((item) => (item != null));
                                raw.unshift(null);
                            }

                        }
                        while (raw.length != 4) {
                            raw.unshift(null);
                        }
                        console.log(raw, 'raw');
                        nextSquares[y] = raw;
                    }
                    console.log('right');
                }
            }
            if (event.keyCode == keysArr.left) {
                keyLeftMove();
                function keyLeftMove() {
                    for (let y = 0; y < 4; y++) {
                        let raw = [...nextSquares[y].filter((item) => (item != null))];
                        for (let index = 0; index < raw.length - 1; index++) {
                            if ((raw[index] === raw[index + 1]) && (raw.length >= 2)) {
                                raw[index] = raw[index] * 2;
                                // raw.splice((index - 1), 1);
                                raw[index + 1] = null;
                                raw = raw.filter((item) => (item != null));
                                raw.push(null);
                            }
                        }
                        while (raw.length != 4) {
                            raw.push(null);
                        }
                        console.log(raw, 'raw');
                        nextSquares[y] = raw;
                    }
                    console.log('left');
                }
            }


        }
        moveKey();
        ///////////
    }


    // console.log(arrField);
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










