import React from 'react'
import ImageCard from './imageCard'

export default function MarketStories() {
  return (
    <section className='flex-1 bg-slate-100 px-2 py-4'>
        <h2 className='text-red-400 text-[16px] mb-8 font-bold '>Market Stories</h2>
        <div className='px-8 pb-4 overflow-y-auto flex flex-wrap justify-center gap-4 h-full'>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
        </div>
    </section>
  )
}
