import React from 'react'
import {Link} from 'react-router-dom'


const Card = () => {
  return (
    <div className='h-60 flex flex-col justify-around w-55 bg-amber-500 p-3 rounded-md shadow-amber-900 shadow-lg'>
      <img className='rounded-md' src="https://tse1.mm.bing.net/th/id/OIP.OsV2LzmvaHV34FppImmMMwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      <h2 className='font-semibold text-lg'>Name of the food item</h2>
      <Link to='/details/' className='bg-black text-white p-2 rounded-md active:scale-99 text-center'>Recipe details</Link>
    </div>
  )
}

export default Card
