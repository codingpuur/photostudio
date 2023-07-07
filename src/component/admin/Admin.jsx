import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminlink from './Adminlink';
 

const Admin = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [editImageId, setEditImageId] = useState(null);
 const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();


  useEffect(() => {
    fetchImages();
  }, [limit ,page]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://tpj.onrender.com/images', {

        params: {
          category:category,
          name: name,
          limit:limit,
          page:page,
        },
      });
      setImages(response.data.images);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  
 

  const handleEdit = (imageId) => {
    setEditImageId(imageId);
  };

  const handleUpdate = async (imageId) => {
    try {
      const updatedImage = {
        category,
        name,
      };

      setLoading(true);
      await axios.put(`https://tpj.onrender.com/images/${imageId}`, updatedImage);
      setLoading(false);

      setCategory(category);
      setName(name);
      setEditImageId(null);

      fetchImages();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://tpj.onrender.com/images/${id}`);
      setLoading(false);

      fetchImages();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleFilter = async () => {
    // setFilterCategory(category);
    // setFilterName(name);

    fetchImages();
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
 

  return (

    <div className=' min-h-screen text-sm md:text-md    pt-10 z-20 space-y-4'>
      <Adminlink/>
      
 
   <div className='md:flex    space-y-2  justify-end   md:space-x-10 pr-10  items-baseline   '>

   
      <div  className=' w-fit md:w-36 '>
      
      <select
        id="countries"
        value={category}
        onChange={handleCategoryChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Choose a category
        </option>
        <option value="wedding">wedding</option>
        <option value="prewedding">prewedding</option>
        <option value="maternity">maternity</option>
        <option value="kids">kids</option>
     
      </select>

    
    </div>
      <div  className=' w-fit md:w-16 '>
      
      <select
        id="countries"
        value={limit}
        onChange={handleLimitChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
      >
        <option value="" disabled>
          Total images show
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
     
      </select>

    
    </div>



      <div  className=' flex  space-x-10'>

         
        <input
        className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  '
          type="text"
          placeholder="Enter Custom Category"
          value={category}
       
          onChange={handleCategoryChange}
        />
        <input
        className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
          type="text"
          placeholder="Name"
          value={name}
       
          onChange={handleNameChange}
        />
        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ' type="button" onClick={handleFilter} disabled={loading}>
          Filter
        </button>
        </div>

        </div>
        
      {loading ? (
        <p className=' text-center '>Loading...</p>
      ) : (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3  mt-10 gap-10 px-10'>
          {images.map((image) => (
            <div key={image._id}>
              {editImageId === image._id ? (
                <div>
                  <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(image._id)}>
                    Save
                  </button>
                </div>
              ) : (
                <div className=' relative  flex flex-col items-center ' >
                  <img className=' h-96 w-full    object-cover' src={image.imageUrl} alt={image.name}  />
                  <p>Category: {image.category}</p>
                  <p>Name: {image.name}</p>
                  <button className='absolute left-5 bg-white/20 hover:bg-white/80 top-1  px-10 py-2 rounded-lg text-white hover:text-black' onClick={() => handleEdit(image._id)}>Edit</button>
                  <button className=' bg-white/20 hover:bg-white/80 top-1  px-10 py-2 rounded-lg  absolute right-5  text-white hover:text-black' onClick={() => handleDelete(image._id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

<div className="mt-4 flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded ${
            page === 1 && 'cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded ${
            page === totalPages && 'cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Admin;
