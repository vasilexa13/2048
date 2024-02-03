import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function Score({ scoreCounter }) {

    return (
        <div>
            <h2 className='score'
            >SCORE:
                {scoreCounter()}
            </h2>
        </div>
    );
}

export default Score;