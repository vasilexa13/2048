import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { useCallback, useContext, useEffect, useState } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";
import { randomNumForInput, randomIndex } from "../functionsAndConst/functions";




function Square({ value, onSquareClick }) {


    // return (<div className="square__component"  >{value}</div>);
    return (<div className="square__component" onClick={onSquareClick}  >{value}</div>);
}
export default Square;








