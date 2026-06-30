import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({item}) => {
  return (
    <div className=' flex flex-col justify-around w-55 bg-amber-50 p-3 rounded-md shadow-amber-200 hover:shadow-amber-400 shadow-lg '>
      <img className='rounded-md h-1/2' src={item?.image_url} alt="" />
      <h2 className='font-bold text-md '>{item?.title}</h2>
      <Link to={`/details/${item.id}`} className='bg-black text-white p-2 rounded-md active:scale-99 text-center'>Recipe details</Link>
    </div>
  )
}

export default Card
