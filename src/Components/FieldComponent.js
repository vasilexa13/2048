import React from "react";
import Square from "./SquareComponent";
import { useState, useRef, useEffect } from "react";
import { gamestatus, keysArr } from "../functionsAndConst/const";
import { randomNumForInput, randomIndex, newArrNull } from "../functionsAndConst/functions";
import _, { random, cloneDeep, isEqual } from "lodash"
import NewGame from '../Components/NewGame/NewGame'
import { useSelector, useDispatch } from "react-redux";
import Score from '../Components/Score';
import { keyRightMove, keyLeftMove, keyDownMove, keyUpMove } from "../functionsAndConst/functions";
import Footer from "../Footer/Footer";

const arrOfData = {};

function Field(props) {

    //REDUX
    let fieldSquareSize = useSelector(state => state.size.sizeReduser);

    let [squares, setSquares] = useState(newArrNull(fieldSquareSize));
    let [count, setCount] = useState(0);
    // console.log(count, 'count')

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


        //!проверка

        // console.log(nextSquares, 'nextSquares');
        // console.log(squares, 'squares');
        // console.log(_.isEqual(nextSquares, squares));

        if (isMove(nextSquares, squares)) {
            if (isHorizontalMove(nextSquares)) {
                console.log('есть горизонтальное движение')
            }
            else {
                console.log('горизонтального движения НЕТ')
            }
            //проверка на вертикальное перемещение
        }
        else {
            setSquares(next);

        }
        // !
        // setSquares(next);//ВЕРНУТЬ КАК БЫЛО
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
    return (<div>
        <div className="field " style={cssFieldStyle}>
            <React.Fragment >
                {arrField}
            </React.Fragment>
        </div>
        <div className='footer'>
            <Score scoreCounter={() => count}></Score>
            <NewGame resBtn={resetBtn} ></NewGame>
        </div>
        <Footer></Footer>

    </div>
    );
}
export const arrField = () => arrField;
export default Field;
