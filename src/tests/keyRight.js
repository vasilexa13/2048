
let keyRightMove = (nextR = [[null, null, 2, 2], [null, null, 2, 2], [null, null, 2, 2], [null, null, 2, 2]], fieldSquareSize = 4) => {

    for (let y = 0; y < fieldSquareSize; y++) {
        let raw = [...nextR[y].filter((item) => (item != null))];
        for (let index = raw.length - 1; index >= 0; index--) {
            if ((raw[index] === raw[index - 1]) && (raw.length >= 2)) {
                raw[index] = raw[index] * 2;
                raw[index - 1] = null;
                raw = raw.filter((item) => (item != null));
                raw.unshift(null);
            }
        }
        while (raw.length != fieldSquareSize) {
            raw.unshift(null);
        }
        nextR[y] = raw;
    }
    return nextR;
}

module.exports = keyRightMove;