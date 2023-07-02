import React from 'react'

export default function RoundedButton({label, onlick, color, ...props}:any) {
    console.log(color)
  return (
    <button style={{background: color}} className={` text-[14px] mx-2 rounded-full text-white font-semibold px-2 py-1`} {...props}>
        {label}
    </button>
  )
}
