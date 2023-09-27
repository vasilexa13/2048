
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
                    for (let x = 0; x < 4; x++) {
                        for (let y = 3; x >= 0; x--) {

                        }
                    }
                    //             for (let coll = 0; coll < 4; coll++) {
                    //                 let emptyElement = [];
                    //                 let filledElement = [];
                    //                 let comparedElement;
                    //                 for (let x = 3; x >= 0; x--) {
                    //                     let element;
                    //                     if (nextSquares[coll][x] == null) {
                    //                         emptyElement.push(x);
                    //                     }
                    //                     else {
                    //                         filledElement.push(x);
                    //                         element = [coll, x];
                    //                         if (filledElement.length) {
                    //                             if (emptyElement.length) {

                    //                                 if ((filledElement.length > 1) && (nextSquares[coll][x] == nextSquares[coll][filledElement[0]])) {//filledElement[0] НЕ ТАК!filledElement[filledElement.lenth-1]
                    //                                     console.log('nextSquares', nextSquares[coll]);
                    //                                     console.log('coll-', coll, 'x-', x);

                    //                                     // nextSquares[coll][filledElement[0]] = nextSquares[coll][filledElement[0]] + nextSquares[coll][filledElement[1]];//ПЕРЕСМОТРЕТЬ
                    //                                     nextSquares[coll][filledElement[0]] = nextSquares[coll][filledElement[0]] + nextSquares[coll][filledElement[1]];//ПЕРЕСМОТРЕТЬ
                    //                                     nextSquares[coll][filledElement[1]] = null;
                    //                                 } else {
                    //                                     nextSquares[coll][emptyElement[0]] = nextSquares[coll][x];
                    //                                     nextSquares[coll][x] = null;
                    //                                 }
                    //                                 filledElement.pop();
                    //                                 filledElement.push(emptyElement[0]);

                    //                                 emptyElement.shift();
                    //                                 emptyElement.push(x);
                    //                             }
                    //                         }
                    //                     }
                    //                     element = undefined;
                    //                 }
                    //                 emptyElement = null;
                    //                 filledElement = null;
                    //             }
                    //         }

                    //     }
                }
                moveKey();

                ///////////
            }

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











