
import React from "react";
import Square from "./SquareComponent";


function Field(props) {

    let fieldSize = +props.fieldSize;//приём размеров поля через props


    let arrRow = [];
    let arrField = [];


    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize; j++) {
            arrRow[i, j] = (<Square key={String(i) + String(j)} index={String(i) + String(j)}  ></Square >);

        }
        arrField.push(arrRow);
        arrRow = [];

        <React.Fragment ><br /></React.Fragment>//НЕ РАБОТАЕТ!!!!!!!

    }

    return (
        arrField
        // FieldRow
    );
}


export default Field;


