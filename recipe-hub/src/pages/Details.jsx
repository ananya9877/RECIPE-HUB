import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

  const params = useParams()
  console.log(params);

  return (
    <div className='flex flex-wrap gap-10 min-h-4/5 justify-center-safe items-start'>
      <div className='h-3/4 w-3/7 overflow-hidden rounded-md shadow-2xl shadow-amber-800'>
        <img className='w-full rounded-md shadow-2xl shadow-amber-800 hover:scale-105 ' src="https://tse1.mm.bing.net/th/id/OIP.OsV2LzmvaHV34FppImmMMwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-3xl'>
          Name of the Dish
        </h1>
        <button className='bg-black text-white p-2 rounded-md active:scale-95 text-center cursor-pointer'>Add to Favorites</button>
        <div className='text-lg '>
          <h2>Ingredients:</h2>
          <p>1 cup smith apples</p>
          <p>1 cup smith apples</p>
          <p>1 cup smith apples</p>
          <p>1 cup smith apples</p>
        </div>
      </div>
    </div>
  )
}

export default Details