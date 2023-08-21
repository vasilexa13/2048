
import React from "react";
import Square from "./SquareComponent";
import Header from "../Header/Header";

const arrOfData = {};

function Field(props, hooks) {
    let fieldSize = +props.fieldSize;//приём размеров поля через props
    fieldSize = 4;


    let arrRow = [];
    let arrField = [];
    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize; j++) {

            arrRow[i, j] = (<Square key={String(i) + String(j)} index={String(i) + String(j)}  ></Square >);
            arrOfData[String(i) + String(j)] = null;
        }
        arrField.push(arrRow);
        arrRow = [];
    }

    return (

        <div className="field" >
            <React.Fragment >
                {arrField}
            </React.Fragment>
        </div>
    );

}
export const arrField = () => arrField;

export default Field;











