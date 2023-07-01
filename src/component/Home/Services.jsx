import React from 'react'
import one from '../../assets/images/one.avif'
import two from '../../assets/images/six.avif'
import three from '../../assets/images/three.jpg'
import four from '../../assets/images/four.avif'
import five from '../../assets/images/five.avif'

// import six from '../../assets/images/six.avif'



const Services = () => {
    const photos = [
        { id: 1, src: one, title: 'Wedding' },
        { id: 2, src: two, title: 'pre Wedding' },
        { id: 3, src: three, title: 'Meternity' },
        { id: 4, src: four, title: 'Kids' },
       
        
        // Add more photos here
      ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
    {photos.map(photo => (
      <div
        key={photo.id}
        className="relative overflow-hidden rounded-lg cursor-pointer   p-1 md:p-8 shadow-2xl  space-y-2 md:space-y-5"
      >
        <img
        
          src={photo.src}
          alt={photo.title}
          className="w-full h-auto object-fill"
        />
        <div className=' text-center  font-bold text-lg '>{photo.title}</div>
       
      </div>
    ))}
  </div>
  )
}

export default Services