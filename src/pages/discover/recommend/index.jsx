import React, { memo } from 'react';
import HXTopBanner from './c-cpns/top-banner'
import HXHotRecommend from './c-cpns/hot-recommend';
import HXNewAlbum from './c-cpns/new-album';
import HXRecommendRanking from './c-cpns/recommend-ranking';
import HXUserLogin from './c-cpns/user-login';
import HXSettleSinger from './c-cpns/settle-singer';
import HXHotAnchor from './c-cpns/hot-anchor'; 
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style.jsx'
function HXRecommend() {

  return (
    <RecommendWrapper>
      <HXTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HXHotRecommend />
          <HXNewAlbum />
          <HXRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <HXUserLogin />
          <HXSettleSinger />
          <HXHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}



export default memo(HXRecommend)
