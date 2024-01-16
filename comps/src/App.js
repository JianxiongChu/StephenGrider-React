import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button children="This is not the default msg;)" primary outlined rounded />
      </div>
      <div>
        <Button secondary />
      </div>
      <div>
        <Button success rounded/>
      </div>
      <div>
        <Button warning rounded/>
      </div>
      <div>
        <Button danger rounded/>
      </div>
    </div>
  );
}

export default App;
