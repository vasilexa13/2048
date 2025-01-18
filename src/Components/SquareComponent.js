function Square({ value, onSquareClick }) {

    return (
        <div className="square__component scale-up-center" tabIndex={-1}
            onKeyDown={onSquareClick}>{value}
        </div>
    );
}
export default Square;










