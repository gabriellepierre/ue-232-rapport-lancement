import React, { useState } from 'react';
import './App.css';
import {Phrase} from './Phrase.js';

export const Button = ()=> {

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Cliquez</button>
      <Phrase prout={count}/>
    </>
  );
}

export const ButtonDeux = ()=> {

  const [count, setCount] = useState(true);
  console.log(count);
  return (
    <>
      <button onClick={() => setCount(!count)}>Cliquez</button>
     {count === true ? <Phrase prout={count}/> : "prout"} 
    </>
  );
}