'use client'
import React from 'react'
import { useEffect, useState } from 'react'
declare global {
    namespace JSX {
      interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

export default function InfoStrip() {
    const [isLoading, setIsLoading] = useState(true);;
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/dummyData/stocksInfo.json')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setData(data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <marquee className='bg-black text-white flex items-center h-[30px]' >
            {!isLoading? data.map((items:any)=>
                <span key={items?.key} className='mx-8'>{items?.companyName} <span className='ml-4'>{items?.price}</span> <span className={items?.status == 'up'?'text-green-400 mx-4':'text-red-600 mx-4'}>{items?.by}%</span></span>
            ):'Loading'}
        </marquee >
    )
}
