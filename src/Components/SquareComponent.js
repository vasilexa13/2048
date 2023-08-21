import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { randomIndex, randomNumForInput } from "../App";
import { useCallback, useContext, useEffect, useState } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";


// let indexOfField = { randomSquareIndex };
// console.log(indexOfField);

function Square(props) {
    // const value = randomIndex();
    // const [value] = useState(randomIndex);
    const [data, setData] = useState(randomNumForInput());


    // return (<div className="square__component">{data}</div>);

    if (props.index == String(handleKeyDown)) {//ХОЧУ СРАВНИВАТЬ С СЛУЧАЙНО ГЕНЕРИРУЕМОЙ ЯЧЕЙКОЙ
        return (
            <div className="square__component">{data}</div>
        )
    }
    else {
        return (
            <div className="square__component">{data * 10}</div>
        );
    }
}
export default Square;








