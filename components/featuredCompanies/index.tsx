'use client'
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';

export default function FeaturedCompanies() {
    const [isLoading, setIsLoading] = useState(true);;
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/companiesImage/logo.json')
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
    <section className='h-[100px] px-2'>
        <h2 className='text-red-400 text-[16px] font-bold uppercase'>Featured Companies</h2>
        <ul className='flex gap-8 justify-center overflowx-auto'>
            {data.map((items:any)=> <li key={items.id}>
                <Image src={items?.path} alt='logo' width={80} height={80}/>
            </li>)}
        </ul>
    </section>
  )
}
