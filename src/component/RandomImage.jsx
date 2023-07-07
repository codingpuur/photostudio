import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomImage = (props) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, [ props.category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://tpj.onrender.com/images/person?category=${props.category}`);
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const shuffleImages = () => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setImages(shuffled);
  };

  return (


    <div  className='  space-y-5 md:space-y-10 mt-10'>
     <h1 className=' text-3xl   text-center'> Gallery</h1>
     <hr  className=' border-black w-9/12 mx-auto' />
    
    <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-9/12 mx-auto mt-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4 ml-auto absolute"
        onClick={shuffleImages}
      >
        Shuffle Images
      </button>
      {images.map((image) => (
        <img
          key={image._id}
          src={image.imageUrl}
          alt={image.alt}
          className=" object-cover  shadow-md m-2"
        />
      ))}

{selectedImage && (
        <div className="fixed z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <img
            src={selectedImage.imageUrl}
            alt={selectedImage.name}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-xl font-bold bg-red-500 px-4 py-2 rounded"
            onClick={() => setSelectedImage(null)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default RandomImage;
