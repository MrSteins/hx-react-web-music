import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HXThemeHeaderRcm from '@/components/theme-header-rcm'
import HXTopRanking from 'components/top-ranking'
import {RankingWrapper} from './style.jsx'

import {getTopRankingAction} from '../../store/actionCreators'

export default memo(function HXRecommendRanking() {
  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(['recommend','upRanking']),
    newRanking: state.getIn(['recommend','newRanking']),
    originRanking: state.getIn(['recommend','originRanking'])
  }))
  
  const dispatch = useDispatch()

  useEffect(() => {
    [0,2,3].forEach(item => {
      dispatch(getTopRankingAction(item))
    })
  }, [dispatch])

  return (
    <RankingWrapper>
      <HXThemeHeaderRcm title='榜单' />
      <div className='tops'>
        <HXTopRanking info={upRanking}/>
        <HXTopRanking info={newRanking}/>
        <HXTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
