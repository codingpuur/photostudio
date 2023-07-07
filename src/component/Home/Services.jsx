import React from 'react'
import one from '../../assets/services/maternity.jpg'
import two from '../../assets/services/wedding.jpg'
import three from '../../assets/services/prewedding.jpg'
import four from '../../assets/services/baby.jpg'

import { Link } from 'react-router-dom'

// import six from '../../assets/images/six.avif'



const Services = () => {
    const photos = [
        { id: 1, src: two, title: 'Wedding' ,link:'wedding' },
        { id: 2, src: three, title: 'Pre Wedding',link:'prewedding' },
        { id: 3, src: one, title: 'Maternity' ,link:'maternity' },
        { id: 4, src: four, title: 'Kids' ,link:'kids'},
       
        
        // Add more photos here
      ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {photos.map(photo => (
      <Link to ={photo.link}
        key={photo.id}
        className="relative overflow-hidden rounded-lg cursor-pointer   p-1 md:p-8 shadow-2xl  space-y-2 md:space-y-5"
      >
        <img
        
          src={photo.src}
          alt={photo.title}
          className=" h-40  md:h-96 w-full object-cover object-top"
        />
        <div className=' text-center  font-bold text-lg '>{photo.title}</div>
       
      </Link>
    ))}
  </div>
  )
}

export default Services