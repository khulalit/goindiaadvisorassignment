import Image from 'next/image'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

import './styles.scss' 
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center h-[80px] sticky top-0 bg-white z-50 px-2 gap-2'>
        <div className="logo">
            <Image src={'/logo.png'} alt='logo' width={80} height={80}/>
        </div>
        <form action="#" className='border-2 inner-shadow width-res text-[14px] max-w-[400px] rounded-full py-1 px-4 border-gray items-center flex flex-1'>
            <input type="text" name="query" id="search" className=' w-full outline-none flex-[8]' />
            <button className=''>
                <FiSearch size={20}/>
            </button>
        </form>
        <div className='hide-d'>
            <img src='https://picsum.photos/300/300' className='w-[30px] h-[30px] rounded-full'/>
        </div>
        <div className="options hide-m">
            <ul className='flex gap-8 justify-around items-center'>
                <li><Link href={'#'}>Contact Us</Link></li>
                <li className='btn-outline'><Link href={'/login'}>Signin</Link></li>
                <li className='btn-outline'><Link href={'#'}>Signup</Link></li>
            </ul>
        </div>
    </header>
  )
}
