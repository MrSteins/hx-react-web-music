import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { PlayerBarWarpper, Control, PlayInfo, Operator } from './style'
import { Slider, message } from 'antd';
import { getSizeImage, formatDate, getPlaySong } from '../../../utils/format-utils';
import { getSongDetailAction, changeSequenceAction, changeCurrentIndexAndSongAction, changeCurrentLyricIndexAction } from '../store/actionCreators';



export default memo(function HXAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);


  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
    
  }, [dispatch])

  useEffect(() =>  {
    audioRef.current.src = getPlaySong(currentSong?.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  }, [currentSong]);

  const picUrl = currentSong?.al?.picUrl;
  const duration = currentSong?.dt;

  const audioRef = useRef()

  

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause(): audioRef.current.play();
    setIsPlaying(!isPlaying);
  },[isPlaying])

  const changeMusic = tag => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  //获取歌词
  const getLyric = (val) => {
    for(let i = 0; i < lyricList.length; i++) {
      if(val >= lyricList[i].time && val < lyricList[i+1].time) {
        dispatch(changeCurrentLyricIndexAction(i))
      }
    }
  }
  const timeUpdate = (e) => {
    if(!isChanging){
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(e.target.currentTime/duration * 100000)
    }
    getLyric(e.target.currentTime * 1000)
    message.open({
      key: "lyric",
      content: lyricList[currentLyricIndex]&& lyricList[currentLyricIndex].content,
      duration: 0,
      className: "lyric-class"
    })
  }

  const handleMusicEnd = () => {
    if(sequence == 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play();
    } else {
      changeMusic(1)
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if(sequence == 2) {
      currentSequence = 0
    }

    dispatch(changeSequenceAction(currentSequence))
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    setCurrentTime(value / 100 * duration)
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value/100*duration/1000;
    setCurrentTime(value / 100 * duration)
    setIsChanging(false)
    
    if(!isPlaying) {
      playMusic()
    }
  },[duration,isPlaying,playMusic])

  return (
    <PlayerBarWarpper>
      <div className='m-player sprite_player'>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" 
                  onClick={e => playMusic()}></button>
          <button className="sprite_player next"
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="#/" className="singer-name">{currentSong?.ar && currentSong.ar[0].name}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} 
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}
                      />
              <div className="time">
                <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(duration, "mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} 
             onTimeUpdate={e => timeUpdate(e)} 
             onEnded={e => handleMusicEnd()}/>
      </div>
    </PlayerBarWarpper>
  )
})
