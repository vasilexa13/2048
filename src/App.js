import './App.css';
import { useState } from 'react';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { gamestatus } from './functionsAndConst/const';
import NotFoundPage from './Components/NotFoundPage';
import GameRulesPage from './Components/GameRulesPage';
import { fieldSquareSize, sizeUrl } from '../src/functionsAndConst/const';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import LoginPage from './Components/Login';
import { Route, Routes, Link, useSearchParams, Navigate } from 'react-router-dom';
import RegisterPage from './Components/Registration';
import PrivateRoute from './Router/privateRoute';

const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatus[1]);

  let [searchParams, setSearchParams] = useSearchParams();
  const size = +searchParams.get('size');
  let validSize = 4;
  if (sizeUrl.includes(size)) {
    validSize = size;
  }

  let [sizeField, setSizeField] = useState(validSize);

  //redux
  const dispatch = useDispatch();
  dispatch({ type: 'change_size', newSize: validSize });
  const sizeReduser = useSelector(state => state.size.sizeReduser);

  // активная/неактивная ссылка
  const [isLinkDisabled, setIsLinkDisabled] = useState(true);//
  function clickHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <Link to='/rules' className='main cursor'>Rules</Link>
      <Link to='/login' className='main cursor'>Login</Link>
      {/* <Link to='/register' className='main cursor'>Registration</Link> */}

      <React.Fragment>

        {/* {(isLinkDisabled)
          ? <Link to='/game' className='main cursor'>GamePage</Link>
          : <Link to='/game' className='main cursor disabled-link' onClick={clickHandler}>GamePage (YOU SHOULD LOGIN)</Link>
        } */}

      </React.Fragment>

      <Header data={header}></Header>
      <Routes >
        <Route path="/register" element={
          <RegisterPage></RegisterPage>} />

        <Route path="/rules" element={<GameRulesPage />} />

        <Route path="/login" element={
          <LoginPage></LoginPage>} />

        <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size}></Field>}></Route>
        {/* {isLinkDisabled
          ? 
          <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size}></Field>}></Route>
          : <Route element={PrivateRoute} />
        } */}

        <Route path="*" element={<NotFoundPage></NotFoundPage>} />

      </Routes >

    </>
  );
};

export default App;









