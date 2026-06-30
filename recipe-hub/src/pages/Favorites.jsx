import React, { useContext } from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Context/GlobalState';

const Favorites = () => {

  const { favoritesList } = useContext(GlobalContext);
  return (
    <div className='flex justify-center '>
      <div className='pb-7'>
      <div className='flex flex-wrap gap-5 justify-center'>
        {
          favoritesList && favoritesList.length >0 ?
            favoritesList.map((item, idx) => <Card item={item} key={idx}/>)
          : <div>
            <p className='text-4xl font-extrabold'>Nothing added in your favorites...</p>
          </div>
        }
      </div>
    </div>
    </div>
  )
}

export default Favorites
