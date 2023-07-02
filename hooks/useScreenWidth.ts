'use client'
import { useEffect, useState } from 'react'

export default function useScreenWidth() {
    const [width, setScreenWidth] = useState<number>(1000);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(width)
  
    return width;

}
