import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='w-full border-2 border-gray-300 rounded-md p-2 bg-white text-gray-900' />
        <button className='btn btn-circle bg-sky-500 text-white'><CiSearch /></button>
    </div>
  )
}

export default SearchInput