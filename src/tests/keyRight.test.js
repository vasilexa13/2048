const keyRightMove = require('./keyRight.js');

describe('keyRightMove', () => {
    test('проверка движения вправо', () => {
        expect(keyRightMove()).toEqual([[null, null, null, 4], [null, null, null, 4], [null, null, null, 4], [null, null, null, 4]]);
    })
    test('проверка движения вправо с двумя элементами', () => {
        expect(keyRightMove(
            nextR = [[2, 2, null, null], [2, null, null, 2], [null, 2, null, 2], [2, null, 2, null]])).toEqual(
                [[null, null, null, 4], [null, null, null, 4], [null, null, null, 4], [null, null, null, 4]]);
    })
    test('проверка движения вправо с 3-мя элементами', () => {
        expect(keyRightMove(nextR = [[2, 2, 4, null], [2, null, 2, 4], [null, 2, 2, 4], [2, 4, 2, null]])).toEqual(
            [[null, null, 4, 4], [null, null, 4, 4], [null, null, 4, 4], [null, 2, 4, 2]]);
    })
    test('проверка движения вправо 4 элемента', () => {
        expect(keyRightMove(nextR = [[2, 2, 2, 2], [2, 4, 2, 2], [4, 2, 4, 2], [2, 2, 2, 4]])).toEqual(
            [[null, null, 4, 4], [null, 2, 4, 4], [4, 2, 4, 2], [null, 2, 4, 4]]);
    })
    test('проверка движения вправо  пустое поле', () => {
        expect(keyRightMove(nextR = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]])).toEqual(
            [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]]);
    })
})