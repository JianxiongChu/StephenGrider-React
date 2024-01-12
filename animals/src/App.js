import ShowAnElement from './ShowAnElement.js'
import {useState} from 'react'

function getRandomAnimal() {
  const animals = ['bro', 'bromium', 'broski', 'bruddah', 'bruv']
  return animals[Math.floor(Math.random() * animals.length)]
};

function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    // setCount(count + 1);
    // count += 100 Not gonna change count!
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderAnimals = animals.map((animal, index) => {
    return <ShowAnElement type = {animal} key = {index} />;
  });

  const handleDoubleClick = () => {
    console.log("Double Cliqqed nooooooice");
  };

  const handleMouseOver = () => {
    console.log("U moused over me niceee");
  };

  const handleMouseOut = () => {
    console.log("Bruh");
  };

  return (
    <div className="App">
      <button 
        onClick = {handleClick}
        onDoubleClick = {handleDoubleClick}
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
      >
        Number of animals:{animals.length}
      </button>
      <div>
        {renderAnimals}
      </div>
    </div>
  );
}

export default App;
