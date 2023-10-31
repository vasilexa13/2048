import './App.css';
import { useEffect, useRef, useState } from 'react';
import Square from './Components/SquareComponent';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { gameStatusFlag } from './Components/FieldComponent';
import { gamestatus } from './functionsAndConst/const';
import { random, randomNumForInput, randomIndex } from './functionsAndConst/functions';
import { score } from './Components/FieldComponent';
import { throttle, debounce, create } from 'lodash';
import NotFoundPage from './Components/NotFoundPage';
import GameRulesPage from './Components/GameRulesPage';
import { useSearchParams } from "react-router-dom";
import { fieldSquareSize, sizeUrl } from '../src/functionsAndConst/const';
import NewGame from './Components/NewGame/NewGame';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';



const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatus[1]);
  //
  //
  let [searchParams, setSearchParams] = useSearchParams();
  const size = +searchParams.get('size');
  let validSize = 4;
  if (sizeUrl.includes(size)) {
    validSize = size;
  }
  else {
    console.log('не входит в заданное множество');
  }
  let [sizeField, setSizeField] = useState(validSize);

  //redux
  const dispatch = useDispatch();
  dispatch({ type: 'change_size', newSize: validSize });
  const sizeReduser = useSelector(state => state.sizeReduser);

  return (
    <>
      <Header
        data={header}
      >
      </Header>
      <Routes >
        <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size} >
        </Field>} />
        <Route path="/rules" element={<GameRulesPage></GameRulesPage>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />

      </Routes >
    </>
  );
};

export default App;









