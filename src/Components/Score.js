import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

function Score() {
    // let [score2, setScore] = useState(2);

    //Redux
    const dispatch = useDispatch();
    const scoreReducer = useSelector(state => state.score.scoreReducer);
    dispatch({ type: 'count_score', payload: scoreReducer });//NO


    return (
        <div>
            <h2 className='score'
            >SCORE:{scoreReducer}</h2>
            {/* <h2 className='score'>SCORE:{score}</h2> */}
        </div>
    );
}

export default Score;