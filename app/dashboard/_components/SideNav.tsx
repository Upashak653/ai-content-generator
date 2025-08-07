/*"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Contact, Home, PanelTop, Settings, User} from 'lucide-react'
import { usePathname } from 'next/navigation'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
          name:'Contact',
          icon:Contact,
          path:'/dashboard/contact/(.*)'
        },
        {
          name:'About',
          icon:User,
          path:'/dashboard/about/(.*)'
        },
        
        {
            name:'Settings',
            icon:Settings,
            path:'/dashboard/settings/(.*)'
        }
        
    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    } , [])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center mb-2'>
      <Image src={'/logo.svg'} alt='logo' width={120} height={100}/>
        </div>
      <hr className='my-5 border'/>
      <div className='mt-3'>
        {MenuList.map((menu)=>(
            <div className={`flex gap-2 mb-2 p-3
            hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
            ${path==menu.path && 'bg-primary text-white'}
            `}>
                <menu.icon className='h-7 w-7'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
*/
'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Contact, Home, Settings, User ,PanelTop } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

function SideNav() {
  const router = useRouter()
  const path = usePathname()

  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },

    {
      name: 'Contact',
      icon: Contact,
      path: '/dashboard/contact',
    },
    {
      name: 'About',
      icon: User,
      path: '/dashboard/about',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ]

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center mb-2'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
      </div>
      <hr className='my-5 border' />
      <div className='mt-3'>
        {MenuList.map((menu) => (
          <div
            key={menu.name}
            onClick={() => router.push(menu.path)}
            className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center
              hover:bg-primary hover:text-white
              ${path.startsWith(menu.path) ? 'bg-primary text-white' : ''}
            `}
          >
            <menu.icon className='h-7 w-7' />
            <h2 className='text-lg'>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
