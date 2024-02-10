import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { panelDefault } from "../styles/Panel";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen);
    onSelect(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className={panelDefault("flex justify-between items-center cursor-pointer")}
        onClick={handleClick}
      >
        {selection === null ? "Select..." : selection?.label}
        <GoChevronDown className="text-lg"/>
      </div>
      {isOpen && (
        <div className="absolute top-full border-rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
