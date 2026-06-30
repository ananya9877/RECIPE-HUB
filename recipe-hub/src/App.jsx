import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Details from "./pages/Details"
import NavBar from "./Components/NavBar"
import {Search} from 'lucide-react'

function App() {
  
  return (
    <>
      <div className='min-h-screen w-full bg-stone-50 py-7 px-3 '>
          <NavBar />
        {/* <div className="sticky top-0"> */}
        {/* </div> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App