import './App.css';
import GameField from './Components/Field';
import { useEffect, useRef } from 'react';
import Square from './Components/SquareComponent';


// const root = ReactDOM.createRoot(document.getElementById('root'));



const App = () => {
  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);
  };
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <div
        ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}
      >
        <GameField />
      </div>
    </div>
  );
};

export default App;

// Функция ВКЛЮЧАЕТ последний элемент
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log('сдучайное число:'randomNum);
  return randomNum;
}

// Генерация случайного числа 2 или 4... randomNumForInput
let arrNumForInput = [2, 4, 8, 16];
arrNumForInput = arrNumForInput.slice(0, 2);
let randomNumForInput = arrNumForInput[random(0, 1)];
// console.log('random [2,4]'randomNumForInput);

//Генерация index or key случайной ячейки
let randomIndex = String(random(0, 3)) + String(random(0, 3));
// console.log('randomIndex=' + randomIndex);







