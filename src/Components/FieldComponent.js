import React from "react";
import Square from "./SquareComponent";

// const BrElement = (<br>перенос</br>);
// const rootElement = document.getElementById('root');


function Field() {
    // const fieldSize = 4;//ввод размеров поля
    let fieldSize = prompt('input field size', 4);
    fieldSize = +fieldSize;

    let arrRow = [];
    let arrField = [];

    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize; j++) {
            arrRow[i, j] = (<Square key={String(i) + String(j)
            }> Square</Square >);
        }
        arrField.push(arrRow);
        arrRow = [];

        <React.Fragment ><br /></React.Fragment>
        // BrElement;
        // ReactDOM.createRoot(rootElement).render(<br />);
    }
    //Создание поля через MAP
    // let numbers = [0, 1, 2, 3];
    // let FieldRow = numbers.map((number) => <Square key={number}>Square</Square>);
    // let FieldSquare = FieldRow.map(() => FieldRow);
    return (
        arrField
        // FieldRow
    );
}


export default Field;


