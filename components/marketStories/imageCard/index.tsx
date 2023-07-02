import React from 'react'

export default function ImageCard({url, text}: any) {
  return (
    <div className='relative w-[180px]'>
        <img src={url} width={180} height={180} className='rounded-[10px]'></img>
        <p className='inline-block absolute bottom-0 bg-[rgba(161,160,159,0.5)] font-bold text-center w-[180] '>{text}</p>
    </div>
  )
}
