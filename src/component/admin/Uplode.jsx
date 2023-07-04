import React, { useState } from 'react';
import axios from 'axios';
import Adminlink from './Adminlink';

function Uplode() {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState("wedding");
  const [name, setName] = useState("Kapil-Aastha");
  const [value, setvalue] = useState(null);
 
  console.log( image.image)
  const handleImageChange = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
  
    const file = event.target.files[0];
    setvalue(URL.createObjectURL(file));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('category', category);
    formData.append('name', name);

    try {
      const response = await axios.post('https://tpj.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
      // Handle successful upload
    } catch (error) {
      console.error('Error uploading image', error);
      // Handle upload error
    }
  };

  return (
  
    <form className='   space-y-5 h-screen pt-10 text-center' onSubmit={handleSubmit}>
      <Adminlink/>

    
<div class="flex items-center  justify-center w-full  space-y-10 mt-10">
<label for="dropzone-file" className="flex flex-col items-center justify-center w-11/12 md:w-1/2 h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" className="hidden"  onChange={handleImageChange} />
    <img className='mt-4 mb-4 w-40 h-auto object-contain' src={value} alt="" />
    {/* <h1>{image.name}</h1> */}
</label>
</div> 
<div className=' flex justify-center items-center space-x-10'>
 
    <input
     className='h-10  bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  '
      type="text"
      placeholder="Category"
      // value={category}
      value="wedding"
      onChange={handleCategoryChange}
    />
    <input
            className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  '
      type="text"
      placeholder="Name"
      // value={name}
      value="Kapil-Aastha"
      onChange={handleNameChange}
    />
     
</div>
    <div className=' flex mx-auto justify-between w-1/2 '>


    <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ' type="submit" >
      Upload
    </button>
    </div>
  </form>
    
  );
}

export default Uplode;
