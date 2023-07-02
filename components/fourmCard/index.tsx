import React from 'react'
import { FcLike } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import './styles.scss'
import Pill from '../filterPill'

interface CardDate {
  comment : string,
  section : string,
  noOfComments : number,
  userName : string,
  noOfLikes : number,
  noOfViews : number,
  image: string,
}

export default function FourmCard({comment, section, noOfComments, userName, noOfLikes, noOfViews, image}: CardDate) {
  return (<>
    {image &&<div className='image-section'>
        <img src='https://api.slingacademy.com/public/sample-photos/1.jpeg' alt='userphoto' className=' img-big'/>
      </div>}
    <div className='card shadow-lg'>
      <div className='car-col1'><img src='https://api.slingacademy.com/public/sample-photos/1.jpeg' alt='userphoto' className=' img-user'/></div>
      <div className='card-col2'>
        <div className='mb-4'>
          <h4 className='inline-block mr-4'>{userName}</h4>
          <Pill text={section} color={section == 'section1' ? 'red' : section == 'section2'?'#093967':'yellow'}/>
        </div>
        <span className='text'>
          {comment}
        </span>
        <div className='flex child-flex flex-auto my-4 justify-around font-normal' >
          <span>
            <FcLike size={20}/>
            2k
          </span>
          <span >
            <AiOutlineEye size={20}/>
            2k
          </span>
          <span>
            <BiComment size={20}/>
            2k <span className='hide-m'>Comments</span>
          </span>
          <span>
            <AiOutlineShareAlt size={20}/>
            <span className='hide-m'>Share</span>
          </span>
        </div>
      </div>
    </div>
    </>
  )
}
