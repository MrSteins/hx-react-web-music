import React, { memo } from 'react'

import {
  SongCoverWarpper
} from './style.jsx'

import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function HXSongCover(props) {
  const { picUrl, name, playCount, copywriter } = props
  return (
    <SongCoverWarpper>
      <div className='cover-top'>
        <img src={getSizeImage(picUrl, 140)} alt="" />
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom text-nowrap'>
        <a href="">{name}</a>
      </div>
      <div className='cover-source text-nowrap'>
        {copywriter}
      </div>
    </SongCoverWarpper>
  )
})
