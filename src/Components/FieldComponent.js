import React from "react";
import Square from "./SquareComponent";
import { useState } from "react";
import { gamestatus, keysArr } from "../functionsAndConst/const";
import { randomNumForInput, newArrNull } from "../functionsAndConst/functions";
import _, { random } from "lodash"
import NewGame from '../Components/NewGame/NewGame'
import { useSelector } from "react-redux";
import Score from '../Components/Score';
import { keyRightMove, keyLeftMove, keyDownMove, keyUpMove } from "../functionsAndConst/functions";
import Footer from "../Footer/Footer";
import "./fieldComponent.css"

function Field(props) {
    // fetch с запросом к ендпоинту разрешения
    (async function clickHandler() {
        const accessToken = await localStorage.getItem("accessToken");
        try {
            await fetch('http://localhost:3500/game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                },
            });
        }

        catch (error) {
            console.error('Error:', error);
        }
    }
    )()

    //REDUX
    let fieldSquareSize = useSelector(state => state.size.sizeReduser);

    let [squares, setSquares] = useState(newArrNull(fieldSquareSize));
    let [count, setCount] = useState(0);

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

    let countScore = (num) => {
        if (typeof (num) != 'undefined') {
            count += num;

            if (count >= +localStorage.getItem('bestScore')) {
                localStorage.setItem('bestScore', count)
            }
            return setCount(count);
        }
    };

    let moveKey = function (event, nextArr) {
        if (event.keyCode === keysArr.ArrowRight) {
            return keyRightMove(nextArr, fieldSquareSize, countScore);
        }
        else if (event.keyCode === keysArr.ArrowLeft) {
            return keyLeftMove(nextArr, fieldSquareSize, countScore);
        }
        else if (event.keyCode === keysArr.ArrowDown) {
            return keyDownMove(nextArr, fieldSquareSize, countScore);
        }
        else if (event.keyCode === keysArr.ArrowUp) {
            return keyUpMove(nextArr, fieldSquareSize, countScore);
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

    let isMove = (arrBefore, arrAfter) => {
        if (_.isEqual(arrBefore, arrAfter)) {
            console.log('массивы равны', _.isEqual(arrBefore, arrAfter))
        }
    }

    let isHorizontalMove = (arr) => {
        for (let index = arr.length - 1; index >= 0; index--) {
            if ((arr[index] === arr[index - 1]) && (arr.length >= 2)) {
            }
        }
    }

    //прописать функцию через throttle
    let handleKey = (event) => {
        const nextSquares = _.cloneDeep(squares);
        // let statusGame = gameOver(nextSquares);
        // props.abc(statusGame);
        let next = throttleMoveKey(event, nextSquares);
        next = addElement(nextSquares, event);

        if (isMove(nextSquares, squares)) {
            if (isHorizontalMove(nextSquares)) {
                console.log('есть горизонтальное движение')
            }
            else {
                console.log('горизонтального движения НЕТ')
            }
        }
        else {
            setSquares(next);
        }
    }

    let resetBtn = () => {
        squares = _.cloneDeep(newArrNull(fieldSquareSize));
        setCount(0);
        return setSquares(squares);
    }

    const cssFieldStyle = {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        display: 'inline-grid',
        gridTemplateColumns: `repeat(${fieldSquareSize}, ${1 / fieldSquareSize * 100}%)`
    }
    return (

        <div className="mainWrapper">
            <div className="menu-countContainer">
                <div className='footer2'>
                    <NewGame resBtn={resetBtn}></NewGame>
                    <Score scoreCounter={() => count}></Score>
                </div>
            </div>

            <div className="field " style={cssFieldStyle}>
                <React.Fragment>
                    {arrField}
                </React.Fragment>
            </div>
            <Footer></Footer>
        </div>
    );
}

export const arrField = () => arrField;
export default Field;
