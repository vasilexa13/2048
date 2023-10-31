import React from 'react';
import { resetBtn } from '../FieldComponent';

function NewGame() {

    return (
        <div>
            <button className='new_game' onClick={resetBtn}>
                NEW GAME
            </button>
        </div>
    );
}

export default NewGame;