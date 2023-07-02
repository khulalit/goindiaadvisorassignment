import React from 'react'

export default function ImageCard() {
  return (
    <div className='relative w-[180px]'>
        <img src='https://picsum.photos/300/300' width={180} height={180} className='rounded-[10px]'></img>
        <p className='inline-block absolute bottom-0 bg-[rgba(161,160,159,0.5)] font-bold text-center w-[180] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque?</p>
    </div>
  )
}
