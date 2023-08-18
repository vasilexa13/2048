import './App.css';
import { useEffect, useRef } from 'react';
import Square from './Components/SquareComponent';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
// import { configureStore } from '@reduxjs/toolkit';



// let fieldSquareSize = +prompt('input field size', 4);
let fieldSquareSize = 4;

// const fieldData = {
//   fieldSize2: fieldSquareSize,
// }
const gamestatus = ['Game Over', 2048];




const App = (props) => {

  const handleKeyDown = (event) => {
    // let fieldData = '00';
    // let ;
    let fieldData = {
      'fieldIndex': '00',
      'fieldValue': 2,
    }
    fieldData['fieldIndex'] = randomIndex();
    fieldData['fieldValue'] = randomNumForInput();
    console.log('User pressed: ', event.key);
    console.log("случайная ячейка:" + fieldData['fieldIndex'], "случайное число:" + fieldData['fieldValue']);
    console.log('fieldData=', fieldData);

    arrOfDataApp[fieldData['fieldIndex']] = fieldData['fieldValue'];
    return fieldData
  };
  // const ref = useRef(null);
  // useEffect(() => {
  //   ref.current.focus();
  // }, []);
  return (

    <React.Fragment >

      <Header data={gamestatus}></Header>
      <div className='field'
        // ref={ref}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <Field id='Field'
          onKeyDown={handleKeyDown}
        // data={fieldData}
        //НЕ РАБОТАЕТ (хотел присвоить через пропсы прокинуть данные fieldData до компонента Square )
        ></Field>
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
function randomNumForInput() {
  let arrNumForInput = [2, 4, 8, 16];
  arrNumForInput = arrNumForInput.slice(0, 2);
  let randomNumForInput = arrNumForInput[random(0, 1)];
  return (randomNumForInput);
}


//Генерация index or key случайной ячейки

function randomIndex() {
  let randomIndex = String(random(0, fieldSquareSize - 1)) + String(random(0, fieldSquareSize - 1));
  return (randomIndex);
}
// const randomIndexNum = String(random(0, fieldSquareSize - 1)) + String(random(0, fieldSquareSize - 1));


// Создание обьекта с данными
let arrOfDataApp = {};
for (let i = 0; i < fieldSquareSize; i++) {
  for (let j = 0; j < fieldSquareSize; j++) {
    arrOfDataApp[String(i) + String(j)] = null
  }
}














