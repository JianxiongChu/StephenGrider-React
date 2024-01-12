import ImageShow from './ImageShow.js';


const ImageList = ({ images }) => {
  const renderedImages = images.map( (image) => {
    return <ImageShow key = {image.id} image = {image} />
  });
  return (
    <div>
      <p>Search results:</p>
      <div>
        {renderedImages}
      </div>
    </div>
  );
};

export default ImageList;
