import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-black via-white to-blue-600 flex flex-col *:justify-center items-center '>
      <h2 className='text-3xl font-bold '>Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-between '>
        <div className='flex justify-center border rounded-md p-2 bg-black text-white my-5 w-[50%]'>
            <Search className='text-white '/>
            <input type='text' placeholder='Search' 
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none'/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
