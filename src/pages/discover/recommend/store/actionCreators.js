import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend';
import { getTopList } from '../../../../services/recommend';

//action
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res
})

const changeHotRecommendsAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res
})

const changeNewAlbumsAction = res =>({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res
})

const changeUpRankingAction = res =>({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res
})

const changeNewRankingAction = res =>({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res
})

const changeOriginRankingAction = res =>({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res
})

//thunk函数
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res.banners))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res.result))
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
}

export const getTopRankingAction = idx => {
  return dispatch => {
    switch (idx) {
      case 0:
        getTopList(0).then(res => {
          dispatch(changeUpRankingAction(res.playlist))
        })
        break;
      case 2:
        getTopList(2).then(res => {
            dispatch(changeNewRankingAction(res.playlist))
          })
        break;
      case 3:
        getTopList(3).then(res => {
              dispatch(changeOriginRankingAction(res.playlist))
            })
        break;
      default:
        break;
    }
  }
}