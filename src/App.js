import './App.css';
import { useEffect, useRef, useState } from 'react';
import Square from './Components/SquareComponent';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { render } from '@testing-library/react';
import { gameStatusFlag } from './Components/FieldComponent';
import { gamestatus } from './functionsAndConst/const';
import { random, randomNumForInput, randomIndex } from './functionsAndConst/functions';
// import { onSquareClick }

// import { configureStore } from '@reduxjs/toolkit';

// let fieldSquareSize = +prompt('input field size', 4);


// // Получение рандомного элемента поля
// export const seachElement = () => {
//   let randomElement = document.getElementsByClassName('square__component')[randomIndex()];
//   console.log(randomElement);
// }




const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatus[1])



  return (
    <React.Fragment >
      <Header
        data={header}

      >
      </Header>

      <div id='fieldArea'
      // ref={ref}
      // tabIndex={-1}
      // onKeyDown={handleKeyDown}
      // onKeyDown={onSquareClick}

      >
        <Field id='Field'
          abc={setHeader}
        // onKeyDown={}
        >
        </Field>
      </div>
    </React.Fragment >
  );
};
export default App;








