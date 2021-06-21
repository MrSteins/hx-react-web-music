import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { Carousel } from 'antd';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style.jsx'

import { getTopBannerAction } from '../../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


export default memo(function HXTopBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend','topBanners'], shallowEqual)
  }))
  const dispatch = useDispatch();

  const bannerRef = useRef()

  useEffect(() => {
    dispatch(getTopBannerAction())
  },[dispatch])

  const bgImage = topBanners[currentIdx] && (topBanners[currentIdx].imageUrl + "?imageView&blur=40x20");

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIdx(to)
    });
  }, [])

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => {
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
