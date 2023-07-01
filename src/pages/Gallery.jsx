import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';
import { useParams } from 'react-router-dom';


const Gallery = () => {
    // const location = useLocation();
    // const queryParams = queryString.parse(location.search);
    const { categoryName } = useParams();
    console.log(categoryName)
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/images?catagory=${categoryName}`); // Replace with your API endpoint
        console.log(response.data.images)
        setPhotos(response.data.images);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    

    fetchPhotos();
  }, []);
console.log(photos)
  return (
    <div className="grid grid-cols-3 gap-4">
        {/* <div>Query Parameter: {queryParams.id}</div> */}
      {photos.map((photo) => (
        <img
          key={photo._id}
          src={photo.imageUrl}
          alt=""
          className="w-full h-auto object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;
