import React from 'react';


function Score({ scoreCounter }) {

    return (
        <div>
            <h2>SCORE:
                {scoreCounter()}
            </h2>
        </div>
    );
}

export default Score;