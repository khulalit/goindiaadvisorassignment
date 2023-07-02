import React from 'react'
import RoundedButton from '../roundedButton'
import { FiSearch } from 'react-icons/fi'

export default function Header() {
  return (<div className='bg-white' style={{position: 'sticky', top: 0}}>
    <h3 className=' text-[16px] font-bold bg-slate-100'>Filters</h3>
    <div className='flex flex-wrap justify-between items-start px-2 text-[12px] shadow-lg py-4 rounded-lg bg-white'>
        
            <RoundedButton label='Section 1' color='#093967'/>
            <RoundedButton label='Section 2' color='red'/>
            <RoundedButton label='Section 2' color='yellow'/>
            <div className='border-2 border-gray min-w-[100px] mt-2 h-[30px] flex-1 flex items-center text-[14px] py-2 rounded-full px-2'>
                <button className='pr-4'>
                    <FiSearch />
                </button>
                <input type="text" className='w-full outline-none' placeholder='Search here'/>
                    
            </div>
    </div></div>
  )
}
