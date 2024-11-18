import React from 'react'

const Search = () => {
  return (
    <div className='flex gap-2 w-full h-full justify-center items-center'>
      <input className='border-c_blue border-2 w-[70%] h-8'/>
      <button className='bg-c_blue text-white font-bold px-2 h-8'>Search</button>
    </div>
  )
}

export default Search