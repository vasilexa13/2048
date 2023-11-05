import './App.css';
import { useEffect, useRef, useState } from 'react';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { gamestatus } from './functionsAndConst/const';
import NotFoundPage from './Components/NotFoundPage';
import GameRulesPage from './Components/GameRulesPage';
import { useSearchParams } from "react-router-dom";
import { fieldSquareSize, sizeUrl } from '../src/functionsAndConst/const';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useCallback } from "react";
import Score from './Components/Score';
import NewGame from './Components/NewGame/NewGame';

const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatus[1]);

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
  const sizeReduser = useSelector(state => state.size.sizeReduser);

  return (
    <>
      <Header data={header}></Header>
      <Routes >
        <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size}  >
        </Field>} />
        <Route path="/rules" element={<GameRulesPage></GameRulesPage>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes >
    </>
  );
};

export default App;









