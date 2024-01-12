import React from 'react';
import ReactDOM from 'react-dom/client';
import CompNote from './Component.png';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
  
  const message = {}; // React does not recongnize data types other than string and number, therefore an object or a boolean value will not render at all.
  /* return <h1>{message}</h1>; */ 
  // This will give an error in the browser console.

  
  const date = new Date();
  const time = date.toLocaleTimeString();
  /* return <h1>{time}</h1>*/ 
  // Prints out the current time

  
  let msg2 = 'Bye!';
  if (Math.random() > 0.5){
    msg2 = 'Hello!';
  }
  // on returning msg2, either Bye of Hello will be displayed based on the RNG result


  
  const name = 'Samantha';
  const age = 23;
  /*
  return(
    <h1>Hello, my name is {name} and my age is {age}.</h1>
  );
  */
  // Hello, my name is Samantha and my age is 23.


  let inputType = "number";
  /*return (<input 
    type = {inputType} 
    min = {5} 
    max = {100}
    style = {{ border: '3px solid red'}} // In-line styles are creaed as objects
  />);*/
  // an input field that only accepts a number in [5, 100]


  // return <textarea autofocus = {true}/>;
  /* Will give a warning like this:
  Invalid DOM property `autofocus`. Did you mean `autoFocus`?
    at textarea
    at App
  */
  // Reminder that you should use camel case for tag attributes>

  return (
    <div>
      <h1>Component</h1>
      <img src={CompNote}></img>
    </div>
  );
}

root.render(<App />); 