import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import HXThemeHeaderRcm from '@/components/theme-header-rcm'
import HXSongCover from 'components/song-cover'

import {
  HotRecommendWarpper
} from './style.jsx'
import { getHotRecommendsAction } from '../../store/actionCreators.js'

export default memo(function HXHotRecommend() {
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'], shallowEqual)
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])
  return (
    <HotRecommendWarpper>
      <HXThemeHeaderRcm title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className='recommend-list'>
        {
          hotRecommends.map(item => {
            return <HXSongCover key={item.id} {...item} />
          })
        }
      </div>
    </HotRecommendWarpper>
  )
})
