import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { randomIndex, randomNumForInput } from "../App";
import { useCallback, useContext, useEffect, useState } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";
import { seachElement } from "../App";



function Square({ value, onSquareClick }) {


    const [data, setData] = useState(null);

    function addData() {
        setData(randomNumForInput());
    }


    return (<div className="square__component" onClick={onSquareClick} >{value}</div>);
    return (<div className="square__component" onClick={addData}>{data}</div>);
    return (<div className="square__component" onKeyDown={addData}>{data}</div>);
}
export default Square;








