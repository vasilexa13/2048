import './App.css';
import { useEffect, useRef, useState } from 'react';
import Square from './Components/SquareComponent';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { render } from '@testing-library/react';
import { setData2 } from './Components/SquareComponent';
// import { configureStore } from '@reduxjs/toolkit';


// let fieldSquareSize = +prompt('input field size', 4);
let fieldSquareSize = 4;

const gamestatus = ['Game Over', 2048];

// export function setSquareData() {
//   useState(randomNumForInput());
//   //   setState(randomNumForInput());
// }


export const handleKeyDown = (event) => {
  console.log('User pressed: ', event.key);
  seachElement();



  // randomIndex();
  // const [value, setValue] = useState(randomIndex);

  // console.log(randomIndex());
  // return randomIndex();
}

//Получение рандомного элемента поля
export const seachElement = () => {
  let randomElement = document.getElementsByClassName('square__component')[randomIndex()];
  console.log(randomElement);
  // render()
  return (
    randomElement
  );
}


const App = (props, hooks) => {
  // const [arr, setArr] = useState([]);
  return (

    <React.Fragment >
      <Header data={gamestatus}></Header>

      <div className='field'
        // ref={ref}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      // onClick={handleKeyDown}
      >
        <Field id='Field'

        >
        </Field>
      </div>
    </React.Fragment >
  );
};
export default App;



// Функция ВКЛЮЧАЕТ последний элемент
function random(min, max) {
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
  return (String(random(0, fieldSquareSize ** 2 - 1)))
}
