import { createContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {

  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const navigate = useNavigate();
  const [favoritesList, setFavoritesList] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Invalid favorites in localStorage:", err);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
  }, [favoritesList]);

  

  async function HandleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20`)
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
        navigate('/')
      }
    }
    catch (err) {
      console.log(err);
      setLoading(false)
      setSearchParam('')
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    let copyFavList = [...favoritesList];
    const index = copyFavList.findIndex(item => item.id === getCurrentItem.id)
    if (index === -1) {
      copyFavList.push(getCurrentItem);
    }
    else {
      copyFavList.splice(index);
    }
    setFavoritesList(copyFavList)
  }

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, loading, recipeList, HandleSubmit, recipeDetails, setRecipeDetails, handleAddToFavorite, favoritesList, setFavoritesList }}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState;



// 3b50b864-8f00-4b68-8464-09d0b8a05d20

// https://forkify-api.jonas.io/api/v2/recipes?search={}&key=3b50b864-8f00-4b68-8464-09d0b8a05d20