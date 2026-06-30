import React, { useContext } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const NavBar = () => {

    const { searchParam, setSearchParam, HandleSubmit } = useContext(GlobalContext)
    return (
        <div className='flex justify-around items-center mb-18 bg-stone-50 sticky top-0 z-10 shadow-sm p-3 '>
            <Link to='/' className='font-bold font-serif text-xl'>Recipe Hub</Link>
                <form onSubmit={HandleSubmit} className="searchBox flex bg-white items-center justify-around w-2/5 p-1 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 cursor-pointer active:shadow-none shadow-lg" >
                    <input
                        className='px-4 outline-none w-full'
                        type="text"
                        placeholder='Search recipe..'
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        />
                    <Search className='m-2' />
                </form>
            <div className='flex justify-around gap-20'>
                <Link to='/' className='font-semibold hover:scale-105 '>Home</Link>
                <Link to='/favorites' className='font-semibold hover:scale-105 '>Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar