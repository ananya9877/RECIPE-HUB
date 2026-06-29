import React, { useContext } from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Context/GlobalState'

const Home = () => {

  const {recipeList , loading} = useContext(GlobalContext);

  if(loading) return <div>Loading...Please wait!</div>

  return (
    <div className='pb-7'>
      <div className='flex flex-wrap gap-5 justify-center'>
        {
          recipeList && recipeList.length >0 ?
            recipeList.map((item, idx) => <Card item={item} key={idx}/>)
          : <div>
            <p className='text-4xl font-extrabold'>Nothing to show. Please search something..</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Home