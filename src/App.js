import './App.css';
import Field from './Components/FieldComponent';
import Header from './Header/Header';




function App() {

  return (
    <>

      <Header></Header>
      <Field className="field"></Field>


    </>

  )
}
export default App;


// // function MakeField() {
// const fieldSize = 4;//РАЗМЕР ПОЛЯ
// // let array = Array(fieldSize).fill(0);
// let numbers = [0, 1, 2, 3]
// const listNumbers = nubers.map((numbers) =>
//   <li>{numbers}</li>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ul>{listItems}</ul>);




//   // let fieldRow = array.map((item) => <div className="square__componen" key={item}></div>);
//   // console.log(fieldRow);
// // }

// // MakeField()






// const rootElement = document.getElementById('root');
// console.log(rootElement);
// ReactDOM.createRoot(rootElement).render(<h1>2048</h1>);



// function Square(props, hooks) {
//   const [value, setValue] = useState(null);

//   // Клик на элементе устанавливает значение setValue('2')
//   function handleClick() {
//     setValue('2');
//   }


//   function keyMove() {

//     function getRandomArea(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       let randomAreaNum = Math.floor(Math.random() * (max - min)) + min;
//       console.log(randomAreaNum);
//       return randomAreaNum;
//     }
//     console.log(props.area);
//     console.log(hooks);
//     getRandomArea(0, 16)
//     setValue('3');
//   }
//   // function isAmptyArea() {
//   // }
//   return (
//     <button
//       className="square"
//       // onClick={handleClick}//выделение элемента оп клику
//       onKeyDown={keyMove}
//     >
//       {value}
//     </button >);
// }





