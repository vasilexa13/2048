import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { randomIndex, randomNumForInput } from "../App";
import { useCallback, useContext, useEffect, useState } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";


// let indexOfField = { randomSquareIndex };
// console.log(indexOfField);
export function setData2() {
    return (setData2('X'));
}

function Square(props) {
    // const value = randomIndex();
    // const [value, setValue] = useState(randomIndex);
    const [data, setData2] = useState(null);
    // setData = () => setData('X');
    // setData('randomNumForInput');

    return (<div className="square__component" >{data}</div>);

    // if (props.index == String(handleKeyDown)) {//ХОЧУ СРАВНИВАТЬ С СЛУЧАЙНО ГЕНЕРИРУЕМОЙ ЯЧЕЙКОЙ
    //     return (
    //         <div className="square__component">{data}</div>
    //     )
    // }
    // else {
    //     return (
    //         <div className="square__component">{data}</div>
    //     );
    // }
}
export default Square;








