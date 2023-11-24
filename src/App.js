import './App.css';
import { useEffect, useRef, useState } from 'react';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { gamestatus } from './functionsAndConst/const';
import NotFoundPage from './Components/NotFoundPage';
import GameRulesPage from './Components/GameRulesPage';
import { Navigate, useSearchParams } from "react-router-dom";
import { fieldSquareSize, sizeUrl } from '../src/functionsAndConst/const';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useCallback } from "react";
import Score from './Components/Score';
import LoginPage from './Components/Login';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes, Link, searchParams } from 'react-router-dom';



const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatus[1]);

  // const [authenticated, setAuthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('authenticated');
  //   if (loggedInUser) {
  //     setAuthenticated(loggedInUser);
  //   }
  //   // else {
  //   //   <Navigate replace to='/login'></Navigate>
  //   // }
  // }, [])

  let [searchParams, setSearchParams] = useSearchParams();
  const size = +searchParams.get('size');
  let validSize = 4;
  if (sizeUrl.includes(size)) {
    validSize = size;
  }
  else {
    // console.log('не входит в заданное множество');
  }
  let [sizeField, setSizeField] = useState(validSize);

  //УДАЛЕНИЕ КЛЮЧА РАЗРЕШЕНИЯ ВХОДА
  // localStorage.removeItem('authenticated')

  function getloginData(data) {
    let res = searchParams.get(data);
    return res;
  }

  //redux
  const dispatch = useDispatch();
  dispatch({ type: 'change_size', newSize: validSize });
  const sizeReduser = useSelector(state => state.size.sizeReduser);

  return (
    <>
      <Link to='/login' className='main cursor'>LoginPage</Link>
      <Link to='/rules' className='main cursor'>Rules</Link>
      <Link to='/game' className='main cursor'>GamePage</Link>
      <Header data={header}></Header>
      <Routes >
        <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size}></Field>} />
        <Route path="/rules" element={<GameRulesPage></GameRulesPage>} />
        <Route path="/login" element={
          <LoginPage
            userInput={getloginData('userName')}
            passInput={getloginData('password')}>
          </LoginPage>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes >

    </>
  );
};

export default App;









