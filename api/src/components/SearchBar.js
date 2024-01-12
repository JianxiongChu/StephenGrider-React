import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    onSubmit(term);
    setTerm('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value) // setTerm(event.target.value.replace(/[a-z]/, '')); This eliminates lower case chars
  };
  
  return (
    <div>
      <form onSubmit = {handleFormSubmit}>
        <input onChange = {handleChange} value = {term}/>
        <p>{term.length < 3 && 'Term must be longer!'}</p>
      </form>
    </div>
  );
};

export default SearchBar;