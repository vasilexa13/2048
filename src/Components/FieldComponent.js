
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
                nextSquares[i][j] = randomNumForInput();//(?)
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

        if (event.keyCode == keysArr.right) {
            for (let coll = 0; coll < 4; coll++) {
                let emptyElement = [];
                for (let row = 3; row >= 0; row--) {
                    let element;
                    console.log(element);

                    //проветка первого пустого элемента он будет с индексом 0
                    if (nextSquares[coll][row] == null) {
                        emptyElement.push(row);
                    }

                    // перемещение элемента !=null
                    if (nextSquares[coll][row] != null) {
                        element = [coll, row];
                        console.log('coll', coll, 'row', row);
                        //проверка стоит ли элемент на своем месте или переещается
                        if (!emptyElement.length) { //пропускает нотацию и переходит к else(ЗАСАДА)
                            nextSquares[coll][row] = nextSquares[coll][row];
                        }
                        else {
                            nextSquares[coll][emptyElement[0]] = nextSquares[coll][row];
                            nextSquares[coll][row] = null;
                            emptyElement.shift();
                        }
                    }
                    element = undefined;
                }

            }
        }
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











