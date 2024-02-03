import { render } from "@testing-library/react"
import Field from "./FieldComponent";
import { useCallback, useContext, useEffect, useState, useRef } from "react";
import { arrField } from "./FieldComponent";
import { handleKeyDown } from "../App.js";
import { randomNumForInput, randomIndex } from "../functionsAndConst/functions";
import { classGameOver } from "../functionsAndConst/const";
// import { ReactCSSTransitionGroup } from react;

function Square({ value, onSquareClick }) {
    const myRef = useRef(null);

    return (
        <div className="square__component scale-up-center" tabIndex={-1}
            onKeyDown={onSquareClick}>{value}
        </div>
    );
}
export default Square;










