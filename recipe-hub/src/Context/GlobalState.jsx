import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {

  const [searchParam, setSearchParam] = useState('');

 async function HandleSubmit(searchParam){
    try{
      const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20`)
      const data = await res.json();
       console.log(data);
    }
    catch(err){
      console.log(err);
    }
    // console.log("hey")
  }
    
  return (
    <GlobalContext.Provider value={{searchParam, setSearchParam, HandleSubmit}}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState;



// 3b50b864-8f00-4b68-8464-09d0b8a05d20

// https://forkify-api.jonas.io/api/v2/recipes?search={}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20