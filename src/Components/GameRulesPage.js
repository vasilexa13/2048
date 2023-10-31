import React from 'react';

function GameRulesPage() {
    return (
        <div>
            <h2>Game Rules</h2>
            <ol type='1' className='rules_paragraph'>
                <li>The game is played on a 4x4 square grid(or a square field of another size), consisting of tiles. Each tile has a value that represents a power of two, starting from 2 (i.e., initially, tiles can have a value of 2 or 4).</li>
                <li>The objective of the game is to combine tiles with the same values to create a tile with the number 2048.</li>
                <li>On each move, the player can swipe all the tiles on the grid in one of the four directions - up, down, left, or right.</li>
                <li>If two tiles with the same value collide during a swipe, they merge into one tile with double the value. For example, two tiles with a value of 2 merge into one tile with a value of 4.</li>
                <li>After each move, a new tile with a random value of 2 or 4 appears in an empty spot on the grid.</li>
                <li>The game ends when the player reaches a tile with a value of 2048, or when there are no available moves left and no more tile mergers are possible.</li>
                <li>The score in the game is determined by the sum of all the values of the merged tiles on each move.</li>
                <li>The player can start a new game if they want to improve their score or continue playing.</li>
                <li>To achieve the best results, the player should strategize and plan their moves, avoiding filling up the entire grid without the ability to merge tiles.</li>
                <li>The game 2048 requires attention, logical thinking, and the ability to analyze the current situation on the grid. Good luck!</li>
            </ol>

        </div>
    );
}

export default GameRulesPage;