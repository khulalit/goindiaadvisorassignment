'use client'
import React from 'react'
import { BiSolidRightArrow, BiSolidUser} from 'react-icons/bi'
import { IoIosNotifications } from 'react-icons/io'
import { useState } from 'react'
import { LiaCommentSolid} from 'react-icons/lia'
import { MdArrowDropDown } from 'react-icons/md'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import './styles.scss'
export default function Drawer() {
    const [open, setIsOpen] = useState(false);
  return (
    <aside className={`h-full bg-primary drawer relative transition-all  ${open? "w-[250px]" : 'w-[0]'}`}>
        <button className={`bg-primary px-6 py-1 rounded-sm rotate-90 drawerBtn `} onClick={()=>setIsOpen(!open)}>
            <BiSolidRightArrow color='white' className='rotate-[-90deg]'/>
        </button>
        {open && <>
        <div className='sticky-top py-4 px-2 flex items-center gap-5 justify-around text-white border-b-[1px] border-gray'>
           <span className='flex items-center gap-2'>
                <BiSolidUser color='white' size={25}/>
                <span>Hello, User</span>
           </span>
            <IoIosNotifications size={30} color='white'/>
        </div>
        <ul className='text-white mt-8 flex flex-col gap-2 items-start'>
            <li className='flex justify-around items-center w-full gap-4 bg-[#1E293B]'><LiaCommentSolid size={20}/> 
                
                <span>Discussion Fourm</span>
                <MdArrowDropDown size={20}/>
            </li>
            <li className='flex justify-around items-center px-2 gap-4'><AiOutlineDollarCircle size={20}/>
                <span>Market Stories</span>
            </li>
            <li className='flex justify-around items-center px-8'>Sentiment</li>
            <li className='flex justify-around items-center px-8'>Market</li>
            <li className='flex justify-around items-center px-8'>Sector</li>
            <li className='flex justify-around items-center px-8'>Watchlist</li>
            <li className='flex justify-around items-center px-8'>Events</li>
            <li className='flex justify-around items-center px-8'>News/Interview</li>
           
        
        </ul>
        
        </>}
    </aside>
  )
}

