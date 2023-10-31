import { useState } from "react";
import { gamestatus } from "../App";
import { gameStatusFlag } from "../Components/FieldComponent";

function Header(props) {
    return (<h1 className="scale-up-center">{props.data}</h1>)
}
export default Header;
