import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({item}) => {
  return (
    <div className=' flex flex-col justify-around w-55 p-3 rounded-md  hover:shadow-xl shadow-md transition-all duration-300'>
      <img className='rounded-md h-1/2' src={item?.image_url} alt="" />
      <h2 className='font-semibold text-md text-gray-800 leading-8'>{item?.title}</h2>
      <Link to={`/details/${item.id}`} className='bg-green-700 hover:bg-green-800 text-white p-2 rounded-md active:scale-99 text-center'>Recipe details</Link>
    </div>
  )
}

export default Card
