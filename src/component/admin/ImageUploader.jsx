// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [category, setCategory] = useState('');
//   const [name, setName] = useState('');
//   const [selectedImages, setSelectedImages] = useState([]);

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedImages(files);
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('category', category);
//     formData.append('name', name);
//     selectedImages.forEach((images, index) => {
//       formData.append(`images[${index}]`, images);
//     });

//     try {
//       const response = await fetch('http://localhost:3000/uploads', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       console.log(data); // Do something with the response data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           id="category"
//           value={category}
//           onChange={handleCategoryChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="images">Images:</label>
//         <input
//           type="file"
//           id="images"
//           multiple
//           onChange={handleImageChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Upload</button>
//     </div>
//   );
// };

// export default ImageUploader;
import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('name', name);

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i]);
      }

      const response = await fetch('http://localhost:3000/uploads', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const savedImages = await response.json();
        console.log(savedImages); // Do something with the saved images
      } else {
        throw new Error('Failed to upload images');
      }
    } catch (error) {
      console.error(error);
      // Handle error state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Category:
          <input type="text" value={category} onChange={handleCategoryChange} />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Select Images:
          <input type="file" multiple onChange={handleFileChange} />
        </label>
      </div>
      <div>
        <button type="submit">Upload</button>
      </div>
    </form>
  );
};

export default ImageUploader;
