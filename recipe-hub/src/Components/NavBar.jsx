import React, { useContext } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const NavBar = () => {

    const { searchParam, setSearchParam, HandleSubmit } = useContext(GlobalContext)
    console.log(searchParam);
    return (
        <div className='flex justify-around items-center pb-18'>
            <Link to='/' className='font-bold font-serif text-xl'>Recipe Hub</Link>
            {/* <div className="searchBox flex bg-white items-center justify-around w-2/5 p-1 rounded-full active:border-amber-600 border-2 cursor-pointer active:shadow-none shadow-lg"> */}
                <form onSubmit={HandleSubmit} className="searchBox flex bg-white items-center justify-around w-2/5 p-1 rounded-full active:border-amber-600 border-2 cursor-pointer active:shadow-none shadow-lg" >
                    <input
                        className='px-4 outline-none w-full'
                        type="text"
                        placeholder='Search recipe..'
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        />
                    <Search className='m-2' />
                </form>
            {/* </div> */}
            <div className='flex justify-around gap-20'>
                <Link to='/' className='font-semibold hover:scale-105 '>Home</Link>
                <Link to='/favorites' className='font-semibold hover:scale-105 '>Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar