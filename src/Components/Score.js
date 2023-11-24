import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function Score({ scoreCounter }) {

    //Redux
    // const dispatch = useDispatch();
    // let score = useSelector(state => state.score.score);
    // const addScore = () => {
    //     dispatch({ type: 'count_score', payload: 10 })// записывать значение в payload
    //     //     console.log(countScore(), 'countScore()')
    // }

    return (
        <div>
            <h2 className='score'
            >SCORE:
                {scoreCounter()}
                {/* {score} */}
            </h2>
        </div>
    );
}

export default Score;