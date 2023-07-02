import React from 'react'

export default function Pill({text, color}: {text: string, color: string}) {
  return (
    <span className='py-1 px-2 text-[1rem] text-white rounded-full' style={{background: color}}>
        {text}
    </span>
  )
}
