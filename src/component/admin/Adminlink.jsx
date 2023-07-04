import React from 'react'
import { Link } from 'react-router-dom'

const Adminlink = () => {
  return (
    <div className='  flex justify-end items-center px-10 space-x-10'>
        <Link className=' p-2  bg-green-500 hover:bg-green-600 rounded-lg flex   gap-2   text-white   justify-center items-center' to='/admin'> All image <ion-icon name="eye-outline"></ion-icon></Link>
        <Link className=' p-2  bg-green-500 hover:bg-green-600 rounded-lg flex   gap-2   text-white   justify-center items-center'  to='/admin/uplode'> Add image  <ion-icon name="add-circle-outline"></ion-icon> </Link>
    </div>
  )
}

export default Adminlink