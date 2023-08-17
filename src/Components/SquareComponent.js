import { render } from "@testing-library/react"

function Square(props) {
    if (props.data == props.index) {
        return (
            <div className="square__component">{props.value}</div>
        );

    } else {
        return (
            <div className="square__component"></div>
        );
    }
}
export default Square;


