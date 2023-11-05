import { fieldSquareSize } from "./const";
import { useSelector } from "react-redux";
import { score } from '../Components/FieldComponent'

// Функция ВКЛЮЧАЕТ последний элемент
export function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    // console.log('случайное число:'randomNum);
    return randomNum;
}

// Генерация случайного числа 2 или 4... randomNumForInput
export function randomNumForInput() {
    let arrNumForInput = [2, 4, 8, 16];
    arrNumForInput = arrNumForInput.slice(0, 2);
    let randomNumForInput = arrNumForInput[random(0, 1)];
    return (randomNumForInput);
}

//создание пустого массива для поля заданного размера fieldSquareSize
export let newArrNull = function (fieldSquareSize) {
    // let fieldSquareSize = useSelector(state => state.sizeReduser)//
    let arr = (new Array(fieldSquareSize)).fill(null);
    let arr2 = (new Array(fieldSquareSize));
    for (let i = 0; i < fieldSquareSize; i++) {
        arr2[i] = arr;
    }
    return arr2;
}

// ДВИЖЕНИЕ КУБИКОВ   
export let keyRightMove = (nextR, fieldSquareSize, scoreReducer) => {
    for (let y = 0; y < fieldSquareSize; y++) {
        let raw = [...nextR[y].filter((item) => (item != null))];
        for (let index = raw.length - 1; index >= 0; index--) {
            if ((raw[index] === raw[index - 1]) && (raw.length >= 2)) {
                raw[index] = raw[index] * 2;
                scoreReducer += raw[index];
                console.log(scoreReducer, 'scoreReducerR')
                raw[index - 1] = null;
                raw = raw.filter((item) => (item != null));
                raw.unshift(null);
            }
        }
        while (raw.length != fieldSquareSize) {
            raw.unshift(null);
        }
        nextR[y] = raw;
    }
    return nextR;
}

export let keyLeftMove = (nextL, fieldSquareSize, scoreReducer) => {
    for (let y = 0; y < fieldSquareSize; y++) {
        let raw = [...nextL[y].filter((item) => (item != null))];
        for (let index = 0; index < raw.length - 1; index++) {
            if ((raw[index] === raw[index + 1]) && (raw.length >= 2)) {
                raw[index] = raw[index] * 2;
                scoreReducer += raw[index];
                raw[index + 1] = null;
                raw = raw.filter((item) => (item != null));
                raw.push(null);
            }
        }
        while (raw.length != fieldSquareSize) {
            raw.push(null);
        }
        nextL[y] = raw;
    }
    return nextL;
}

export let keyDownMove = (nextD, fieldSquareSize, scoreReducer) => {
    let arr = [];
    let col = [];
    for (let x = 0; x < fieldSquareSize; x++) {
        for (let y = 0; y < fieldSquareSize; y++) {
            arr.push(nextD[y][x]);
        }
        col = [...arr.filter((item) => (item != null))];
        arr = [];
        //сложение символов
        for (let index = col.length - 1; index >= 0; index--) {
            if ((col[index] === col[index - 1]) && (col.length >= 2)) {
                col[index] = col[index] * 2;
                scoreReducer += col[index];
                col[index - 1] = null;
                col = col.filter((item) => (item != null));
                col.unshift(null);
            }
        }
        while (col.length != fieldSquareSize) {
            col.unshift(null);
        }
        for (let y = 0; y < fieldSquareSize; y++) {///переворот массива(транспонирование)
            nextD[y][x] = col[y];
        }
    }
    return nextD;
}

export let keyUpMove = (nextU, fieldSquareSize, scoreReducer) => {
    let arr = [];
    let col = [];
    for (let x = 0; x < fieldSquareSize; x++) {
        for (let y = 0; y < fieldSquareSize; y++) {//переворот массива(транспонирование)
            arr.push(nextU[y][x]);
        }
        col = [...arr.filter((item) => (item != null))];
        arr = [];
        //сложение символов
        for (let index = 0; index < col.length - 1; index++) {
            if ((col[index] === col[index + 1]) && (col.length >= 2)) {
                col[index] = col[index] * 2;
                scoreReducer += col[index];
                col[index + 1] = null;
                col = col.filter((item) => (item != null));
                col.push(null);
            }
        }
        while (col.length != fieldSquareSize) {
            col.push(null);
        }
        for (let y = 0; y < fieldSquareSize; y++) {///переворот массива(транспонирование)
            nextU[y][x] = col[y];
        }
    }
    return nextU;
}


