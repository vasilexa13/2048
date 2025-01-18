import './App.css';
import { useState } from 'react';
import Field from './Components/FieldComponent';
import Header from './Header/Header';
import React from "react";
import { gamestatusEnd } from './functionsAndConst/const';
import NotFoundPage from './Components/NotFoundPage';
import GameRulesPage from './Components/GameRulesPage';
import {sizeUrl } from './functionsAndConst/const';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import LoginPage from './Components/Login';
import { Route, Routes, Link, useSearchParams } from 'react-router-dom';
import RegisterPage from './Components/Registration';
import PrivateRoute from './Router/privateRoute';
import NewComp from './Components/NewComp';

const App = (props, onSquareClick) => {

  const [header, setHeader] = useState(gamestatusEnd[1]);

  let [searchParams] = useSearchParams();
  const size = +searchParams.get('size');
  let validSize = 4;
  if (sizeUrl.includes(size)) {
    validSize = size;
  }
//redux
  const dispatch = useDispatch();
  dispatch({ type: 'change_size', newSize: validSize });
  useSelector(state => state.size.sizeReduser);
// активная/неактивная ссылка
  const [isLinkDisabled] = useState(true);//


  return (
    <>
      <Link to='/rules' className='main cursor'>Rules</Link>
      <Link to='/login' className='main cursor'>Login</Link>
      <Link to='/game' className='main cursor'>Game</Link>

        <Header data={header}></Header>
      <Routes >
        <Route path="/example" element={<NewComp></NewComp>} />
        <Route path="/register" element={
          <RegisterPage></RegisterPage>} />

        <Route path="/rules" element={<GameRulesPage />} />

        <Route path="/login" element={
          <LoginPage></LoginPage>} />


        {isLinkDisabled
          ?
          <Route path="/game" element={<Field id='Field' abc={setHeader} sizeField={size}></Field>}></Route>
          :
          <Route element={PrivateRoute} />
        }


        <Route path="*" element={<NotFoundPage></NotFoundPage>} />

      </Routes >
    </>
  );
};

export default App;









