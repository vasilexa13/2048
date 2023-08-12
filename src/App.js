import './App.css';
import { useEffect, useRef } from 'react';
import Square from './Components/SquareComponent';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";


// const root = ReactDOM.createRoot(document.getElementById('root'));


// let fieldSquareSize = +prompt('input field size', 4);
let fieldSquareSize = 4;

const fieldData = {
  fieldSize2: fieldSquareSize,
}
// const randomData = {
//   randomIndex: randomIndex(),
//   randomNum: randomNumForInput(),
// }

let arrData = {};



const App = (props) => {
  const handleKeyDown = event => {

    console.log('User pressed: ', event.key);
    console.log("случайная ячейка:" + randomIndex(), "случайное число:" + randomNumForInput());

  };
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <React.Fragment>
      <Header ></Header>
      <div className='field'
        ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}
      >

        <Field
          // squareData={randomData}
          fieldSize={fieldData.fieldSize2}
        ></Field>
        {/* data={squareData} */}

      </div>
    </React.Fragment>
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

// let squareData = {
//   squareIndex: randomIndex(),
//   squareValue: randomNumForInput(),
// };










