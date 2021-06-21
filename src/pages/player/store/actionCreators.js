import { getSongDetail, getLyric } from '../../../services/player'
import { getRandomNumber } from '../../../utils/num-utils'
import { parseLyric } from '../../../utils/parse-lyric'

import * as actionType from './constants'

const changeCurrentSongAction = res => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong: res
})

const changeCurrentSongIndexAction = res => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: res
})

const changePlayListAction = res => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList: res
})

const changLyricListAction = lyricList => ({
  type: actionType.CHANGE_LYRIC_LIST,
  lyricList
})
//导出的action
export const changeSequenceAction = num => ({
  type: actionType.CHANGE_SEQUENCE,
  sequence: num
})

export const changeCurrentLyricIndexAction = val => ({
  type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex: val
})

export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player','sequence'])
    const playList = getState().getIn(["player", "playList"]);
    let currentSongIndex = getState().getIn(['player','currentSongIndex'])

    switch (sequence) {
      case 1:
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
    
      default:
        currentSongIndex +=tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    dispatch(getLyricAction(currentSong.id));
  }
}

//thunk
export const getSongDetailAction = ids => {
  return (dispatch, getState) => {
    //1.根据id查找playlist
    const playList = getState().getIn(['player','playList'])
    const index = playList.findIndex(item => item.id == ids)
    if(index !== -1) {
      dispatch(changeCurrentSongIndexAction(ids))
      const song = playList[index];
      dispatch(changeCurrentSongAction(song))
    } else {
      getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
      const newPlayList = [...playList]
      newPlayList.push(res.songs[0])
      dispatch(changePlayListAction(newPlayList))
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
    })
    }
    //获取歌词
    dispatch(getLyricAction(ids))  
  }
}

export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList))
    })
  }
}