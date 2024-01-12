import searchImages from './api.js';
import ImageList from './components/ImageList.js'
import SearchBar from './components/SearchBar.js'
import { useState } from 'react';

// searchImages();

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    console.log("Searching with term:", term); 
    const searchResults = await searchImages(term);

    setImages(searchResults);
  };

  return (
    <div>
      <SearchBar onSubmit = {handleSubmit}/>
      <ImageList images = {images}/>
    </div>
  );
}

export default App;