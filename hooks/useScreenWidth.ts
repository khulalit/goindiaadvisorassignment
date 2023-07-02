'use client'
import { useEffect, useState } from 'react'

export default function useScreenWidth() {
    const [width, setScreenWidth] = useState(0);

    useEffect(() => {
        
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
