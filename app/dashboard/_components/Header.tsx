import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
    <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
       <Link href={'/'}> Back</Link>
    </div>
    
    <UserButton/>
    </div>
  )
}

export default Header
