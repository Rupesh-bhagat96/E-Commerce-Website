import React, { useContext, useEffect, useState } from 'react'
import { ShopContex } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const {Search, setSearch, showSearch, setShowSearch} = useContext(ShopContex)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }
        else{
            setVisible(false)
             setShowSearch(false)
        }
    },[location])

  return showSearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:1/2'>
        <input value={Search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-inherit text-sm' type="text" placeholder='Search...'/>
        <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer ' src={assets.cross_icon} alt="" />
    </div>
  ): null
}

export default Search