import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [editImageId, setEditImageId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterName, setFilterName] = useState('');
  const [value, setvalue] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://tpj.onrender.com/images', {
        params: {
          category: filterCategory,
          name: filterName,
        },
      });
      setImages(response.data.images);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleUpload = async (event) => {
      
      event.preventDefault();
      const file = event.target.files[0];
      setvalue(URL.createObjectURL(file));
      try {
        const formData = new FormData();
       
      formData.append('image', event.target.files[0]);
      formData.append('category', category);
      formData.append('name', name);
      console.log(name)
    //   console.log(category)
      console.log(event.target.files)

      setLoading(true);
      await axios.post('https://tpj.onrender.com/upload', formData);
      setLoading(false);

      setCategory('');
      setName('');

      fetchImages();
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

      setCategory('');
      setName('');
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
    setFilterCategory(category);
    setFilterName(name);

    fetchImages();
  };

  return (
    <div className=' z-20'>
      <h1 className=' text-center'>Admin</h1>

      <form className='  text-center' onSubmit={handleUpload}>
        {/* <input type="file" onChange={handleUpload} /> */}
        
<div class="flex items-center  justify-center w-full  space-y-10">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-11/12 md:w-1/2 h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden"  onChange={handleUpload} />
        <img className='mt-4 mb-4 w-40 h-auto object-contain' src={value} alt="" />
    </label>
</div> 

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className=' flex mx-auto justify-between w-1/2 '>

        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ' type="button" onClick={handleFilter} disabled={loading}>
          Filter
        </button>
        <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ' type="submit" disabled={loading}>
          Upload
        </button>
        </div>
      </form>

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
                    value={name}
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
    </div>
  );
};

export default Admin;
