import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Kids = () => {
  const { categoryName } = useParams();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://tpj.onrender.com/unique/repeated/${categoryName}`
        ); 

        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [categoryName]);

  return (
    <>
    <div className="  mx-auto  w-full md:w-4/6  px-10 py-10  space-y-8">



       <h1  className=" text-2xl text-center">{categoryName}</h1>
       < hr className="   border-black" />

    
      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-6  mt-5  overflow-hidden w-[90%] md:w-11/12 mx-auto  ">
        {photos.map((photo) => (
          <Link
            to={`/${photo.category}/${photo._id}`}
            className="    relative rounded-lg overflow-hidden shadow-md shadow-black/5 dark:shadow-black/30"
          >
            <img key={photo.id} src={photo.url} alt="image" className="  h-full w-full object-cover  object-center " />
            <p className=" absolute  bottom-0     w-full  text-lg md:text-md lg:text-lg text-black bg-white/50 text-center  pb-1">
              {photo._id}
            </p>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
};

export default Kids;
