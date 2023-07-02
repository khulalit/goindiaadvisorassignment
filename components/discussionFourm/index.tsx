import React, { use, useEffect, useRef } from 'react'
import Header from './header'
import FourmCard from '../fourmCard'
import { useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from '@/redux/postSlice';
import useScreenWidth from '@/hooks/useScreenWidth';


export default function DiscussionFourm() {
  const dispatch = useDispatch();
  const posts = useSelector((state:any) => state.posts.items);
  const status = useSelector((state:any) => state.posts.status);
  const error = useSelector((state:any) => state.posts.error);
  const width = useScreenWidth();

 

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const renderCondationaly=  ()=>{
    if(status === 'loading')
       return <h2>Loading. ...</h2>
    else if(status === 'succeeded')
       return posts.map((data:any)=>
       <FourmCard comment={data.comment} noOfComments={data.numerOfComments} noOfLikes={data.likes} image={data.image} userName={data.userName} noOfViews={data.numberOfViews} section={data.category}/>
     )
     else return 'error in fetching data'
    
  }
  
  return (
    <section className='w-[60%] df bg-slate-100 px-2 flex flex-col '>
        <h2 className='text-red-400 text-[16px] mb-4 font-bold '>Discussion Fourm</h2>
        <div className='px-8 nopadding-m pb-[50px] ' style={{overflowY: width > 768? 'auto': 'hidden'}}>
            <Header/>
            <div className=''>
              {
                 renderCondationaly()
              }
            </div>
        </div>
    </section>
  )
}
