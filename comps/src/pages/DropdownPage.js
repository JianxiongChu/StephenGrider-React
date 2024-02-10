import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);
  const ddOptions = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <Dropdown
      options={ddOptions}
      selection={selection}
      onSelect={handleSelect}
    />
  );
};

export default DropdownPage;
