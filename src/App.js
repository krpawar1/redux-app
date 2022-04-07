import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNumber, decreaseNumber } from './action';

const App = () => {

  const myState = useSelector((state) =>
    state.changeTheNumber
  );

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <h1>
          Redux apk
        </h1>

        <h4>Increment/Decrement counter</h4>

        <div className="quantity">
          <a onClick={() => dispatch(decreaseNumber())} className="quantity__minus" title="Decrement" ><span>-</span></a>

          <input name="quantity" type="text" className="quantity__input" value={myState} />

          <a onClick={() => dispatch(increaseNumber(5))} className="quantity__plus" title="Increment" ><span>+</span></a>
        </div>

      </div>
    </div>)
}

export default App
