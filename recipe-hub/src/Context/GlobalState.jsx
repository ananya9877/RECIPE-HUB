import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {

  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  async function HandleSubmit(event){
    event.preventDefault();
    try{
      const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20`)
      const data = await res.json();
      if(data?.data?.recipes){
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
      }
      // console.log(data);
    }
    catch(err){
      console.log(err);
      setLoading(false)
      setSearchParam('')
    }
  }

  console.log(loading, recipeList);
    
  return (
    <GlobalContext.Provider value={{searchParam, setSearchParam,loading, recipeList, HandleSubmit}}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState;



// 3b50b864-8f00-4b68-8464-09d0b8a05d20

// https://forkify-api.jonas.io/api/v2/recipes?search={}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20