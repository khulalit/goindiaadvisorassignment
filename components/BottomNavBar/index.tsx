import React from 'react'
import { AiOutlineAppstore} from 'react-icons/ai'
import { RiApps2Line } from 'react-icons/ri'
import { BiHomeCircle, BiChat } from 'react-icons/bi'
import { BsListCheck } from 'react-icons/bs'

export default function BottomNavBar() {
  return (
    <div className='h-[50px] z-30 fixed bottom-0 w-full bg-primary flex justify-around items-center hide-d'>
        <div>
            <AiOutlineAppstore size={30} color='white'/>
        </div>
        <div>
            <RiApps2Line size={30} color='white'/>
        </div>
        <div className='border-b-2 border-red-500'>
            <BiHomeCircle size={30} color='white'/>
        </div>
        <div>
            <BiChat size={30} color='white'/>
        </div>
        <div>
            <BsListCheck size={30} color='white'/>
        </div>
    </div>
  )
}
