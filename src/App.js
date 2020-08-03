import React, { useCallback } from 'react';
import {Button} from './components';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {ON_FIRST_BUTTON_CLICK, ON_SECOND_BUTTON_CLICK, ON_THIRD_BUTTON_CLICK} from './action'
import { store } from './store';
import { lowAppReducer } from './reducer';


function App() {
  // useSelector
  const {lowApp} = useSelector((state)=> state);


  // dispatch
  const dispatch = useDispatch();

  const onFirstClick = () => {
    dispatch({type: 'ON_FIRST_BUTTON_CLICK'})  
  }
  const onSecondClick = () => {
    dispatch({type: 'ON_SECOND_BUTTON_CLICK'})  
  }
  const onThirdClick = () => {
    dispatch({type: 'ON_THIRD_BUTTON_CLICK'})  
  }

  return (
    <div className="App">
      <span className="Span">{lowApp}</span>
      <div>
      <Button onClick={onFirstClick}>1</Button>
      <Button onClick={onSecondClick}>2</Button>
      <Button onClick={onThirdClick}>3</Button>
      </div>
    </div>
  );
}

export default App;
