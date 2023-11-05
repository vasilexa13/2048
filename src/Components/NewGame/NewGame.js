import React from 'react';
import { newArrNull } from '../../functionsAndConst/functions';
import { useState } from 'react';

function NewGame({ res21Btn }) {
    // const [resBtn, setResBtn] = useState();
    // setResBtn();
    // let a = (() => { res21Btn() });

    console.log(res21Btn, 'res1');
    // console.log(a, 'a');
    // console.log(res21Btn(), 'res2');
    console.log(typeof (res21Btn), 'resType');
    console.log(this, 'this');
    const any = () => {
        console.log('1');

    }

    return (
        <>
            <button className='new_game'
                onClick={() => res21Btn()}
            // onClick={() => newArrNull()}
            // onClick={setResBtn}
            >
                NEW GAME
            </button>
        </>
    );
}

export default NewGame;