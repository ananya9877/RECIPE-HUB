import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const Details = () => {

  const {id} = useParams()
  const {recipeDetails, setRecipeDetails,handleAddToFavorite, favoritesList} = useContext(GlobalContext)

  useEffect(()=>{
    async function getRecipeDetails() {
      const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
      const data = await res.json();

      if(data?.data){
        setRecipeDetails(data?.data);
      }
    }

    getRecipeDetails()
  },[])

  return (
    <div className='flex flex-wrap gap-10 min-h-4/5 justify-center-safe items-start'>
      <div className='h-3/4 w-3/7 overflow-hidden rounded-md shadow-2xl shadow-amber-800'>
        <img className='w-full rounded-md shadow-2xl shadow-amber-800 hover:scale-103 duration:200 ' src={recipeDetails?.recipe?.image_url} alt="" />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-2xl'>
          {recipeDetails?.recipe?.title}
        </h1>
        <button onClick={()=> handleAddToFavorite(recipeDetails?.recipe)} className='bg-black text-white p-2 rounded-md active:scale-95 text-center cursor-pointer'>
          {
            favoritesList.findIndex(item => item.id === recipeDetails?.recipe?.id) !== -1 ? 'Remove from Favorites' : 'Add to favorites'
          }
        </button>
        <div className='text-lg '>
          <h2 className='text-2xl font-bold mb-5'>Ingredients:</h2>
          <ul className='flex flex-col gap-2'>
            {
              recipeDetails?.recipe?.ingredients.map((ingredient,idx)=><li key={idx}>
                <span className='text-xl font-semibold'>{ingredient.quantity} {ingredient.unit}</span>
                <span className='text-xl font-semibold'>{ingredient.description}</span>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details