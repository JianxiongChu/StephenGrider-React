import DummyContext from "../contexts/dummy";
import { useContext } from "react";

const DummyModifier = () => {
  const { dummy, changeDummy } = useContext(DummyContext);
  return (
    <div>
      <p>{dummy}</p>
      <button onClick={changeDummy}>Click meee</button>
    </div>
  );
};

export default DummyModifier;
