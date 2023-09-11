import { fieldSquareSize } from "./const";



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

//Генерация index or key случайной ячейки
export const randomIndex = () => {
    // return (String(random(0, fieldSquareSize - 1)) + String(random(0, fieldSquareSize - 1)))
    return ((random(0, fieldSquareSize - 1)));
}
