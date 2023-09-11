import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { useCallback, useContext, useEffect, useState } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";
import { randomNumForInput, randomIndex } from "../functionsAndConst/functions";
import { classGameOver } from "../functionsAndConst/const";




function Square({ value, onSquareClick }) {




    return (<div className="square__component " tabIndex={-1}
        onKeyDown={onSquareClick}>{value}</div>);
}
export default Square;








