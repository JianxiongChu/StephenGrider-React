import Button from "./components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log('Clicked')
  }
  const handleMouseOvER = () => {
    console.log('Hovered over')
  }

  return (
    <div className="App">
      <div>
        <Button primary outlined rounded onClick = {handleClick} onMouseOver = {handleMouseOvER}>
          <GoBell/>
          This is not a default message!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Hello!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          How's your day?
        </Button>
      </div>
      <div>
        <Button warning rounded />
      </div>
      <div>
        <Button danger rounded />
      </div>
    </div>
  );
}

export default App;
