import { createContext, useState } from "react";
const DummyContext = createContext();

const Provider = ({ children }) => {
  const [dummy, setDummy] = useState("Dummy!");

  const sharedValue = {
    dummy: dummy,
    changeDummy: setDummy("Dummy is changed!"),
  };
  return (
    <DummyContext.Provider value={sharedValue}>
      {children}
    </DummyContext.Provider>
  );
};

export { Provider };

export default DummyContext;
