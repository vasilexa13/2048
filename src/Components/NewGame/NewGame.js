import React from 'react';

function NewGame({ resBtn }) {
    return (
        <>
            <button className='new_game'
                onClick={() => resBtn()}
            >
                NEW GAME
            </button>
        </>
    );
}

export default NewGame;