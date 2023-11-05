import React from "react";
import Square from "./SquareComponent";
import { useState, useRef, useEffect } from "react";
import { gamestatus, keysArr } from "../functionsAndConst/const";
import { randomNumForInput, randomIndex, newArrNull } from "../functionsAndConst/functions";
import _, { random, throttle, cloneDeep } from "lodash"
import { keyRightMove, keyLeftMove, keyDownMove, keyUpMove } from '../functionsAndConst/functions'
import NewGame from '../Components/NewGame/NewGame'
import { useSelector } from "react-redux";
import Score from '../Components/Score';

const arrOfData = {};

function Field(props) {

    //REDUX
    let fieldSquareSize = useSelector(state => state.size.sizeReduser);

    const [squares, setSquares] = useState(newArrNull(fieldSquareSize));
    let arrRow = [];
    let arrField = [];
    for (let i = 0; i < fieldSquareSize; i++) {
        for (let j = 0; j < fieldSquareSize; j++) {
            arrRow[j] = <Square key={`${i}${j}`} value={squares[i][j]} onSquareClick={(event) => ((handleKey(event)))
            }></Square >
        }
        arrField.push(arrRow)
        arrRow = [];
    }

    let gameStatusFlag = 1;
    function gameOver() {
        return (gamestatus[gameStatusFlag]);
    }

    let moveKey = function (event, nextArr) {
        if (event.keyCode === keysArr.ArrowRight) {
            return keyRightMove(nextArr, fieldSquareSize);
        }
        else if (event.keyCode === keysArr.ArrowLeft) {
            return keyLeftMove(nextArr, fieldSquareSize);
        }
        else if (event.keyCode === keysArr.ArrowDown) {
            return keyDownMove(nextArr, fieldSquareSize);
        }
        else if (event.keyCode === keysArr.ArrowUp) {
            return keyUpMove(nextArr, fieldSquareSize);
        }
    };

    let throttleMoveKey = _.throttle(moveKey, 200);

    function addElement(nextSquares, event) {
        let arr = Array.from(createArrFreeCell(nextSquares));
        let randomElem = random(0, arr.length - 1);
        if (event.key in keysArr) {
            if (arr.length > 0) {
                nextSquares[arr[randomElem]['i']][arr[randomElem]['j']] = randomNumForInput();
            }
        }
        return nextSquares;
    }

    let createArrFreeCell = (nextFree) => {
        let freeCellArr = [];
        let emptyArrayCell = {};
        for (let i = 0; i < nextFree.length; i++) {
            for (let j = 0; j < nextFree[i].length; j++) {
                if (nextFree[i][j] == null) {
                    emptyArrayCell['i'] = i;
                    emptyArrayCell['j'] = j;
                    freeCellArr.push(emptyArrayCell);
                    emptyArrayCell = {};
                }
            }
        }
        return (freeCellArr);
    };

    let handleKey = (event) => {
        const nextSquares = _.cloneDeep(squares);
        let statusGame = gameOver(nextSquares);
        props.abc(statusGame);

        let next = throttleMoveKey(event, nextSquares);
        // let next = moveKey(event, nextSquares);
        next = addElement(nextSquares, event);
        setSquares(next);
    }


    let resetBtn = () => {
        console.log('New game pushed');
        let zeroArr = setSquares(newArrNull());
        return zeroArr;
    }

    const cssFieldStyle = {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        display: 'inline-grid',
        gridTemplateColumns: `repeat(${fieldSquareSize}, ${1 / fieldSquareSize * 100}%)`,
    }
    return (<div>
        <div className="field " style={cssFieldStyle}>
            <React.Fragment >
                {arrField}

            </React.Fragment>

        </div>
        <div className='footer'>
            <Score></Score>
            <NewGame res21Btn={resetBtn} asdas='asdasd'></NewGame>
            {/* <NewGame res21Btn={() => resetBtn}></NewGame> */}
        </div>
    </div>
    );
}
export const arrField = () => arrField;
export default Field;










