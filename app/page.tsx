'use client'
import BottomNavBar from '@/components/BottomNavBar'
import DiscussionFourm from '@/components/discussionFourm'
import Drawer from '@/components/drawer'
import FeaturedCompanies from '@/components/featuredCompanies'
import Header from '@/components/header'
import InfoStrip from '@/components/infoStrip'
import MarketStories from '@/components/marketStories'
import useScrollingStatus from '@/hooks/scrolling'
import useScreenWidth from '@/hooks/useScreenWidth'
import store from '@/redux/store'
import { useState, useRef, useEffect } from 'react'
import { Provider } from 'react-redux'

export default function Home() {
  const [visible, setVisible] = useState(0);
  const width = useScreenWidth();

  return (<>
  
        <Header/>
        <InfoStrip/>
        <FeaturedCompanies/>
        <div className='bg-primary text-white flex hide-d overflow-y-auto'>
            <button className='border-b-2 text-center flex-1' style={{borderBottom: visible == 0? '2px solid red':'none'}} onClick={()=>setVisible(0)}>Discussion Fourm</button>
            <button className='flex-1' style={{borderBottom: visible == 1? '2px solid red':'none'}} onClick={()=>setVisible(1)}>Market Stories</button>
          </div>
          <Provider store={store}>
            <div className={`  flex overflow-hidden scrollbar-styles`} style={{
              height : width && width > 768 ? 'calc(100vh - 220px)': 'max-content'
            }}>
              <Drawer/>
              {width < 768? (visible == 0 ?<DiscussionFourm/>:
              <MarketStories/>) : <><DiscussionFourm />
              <MarketStories/></>}
            </div>
          </Provider>
        <BottomNavBar/>
    </>
  )
}
