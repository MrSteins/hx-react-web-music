import React, { memo, useEffect } from 'react'

import HXThemeHeaderRcm from '@/components/theme-header-rcm'
import { Carousel } from 'antd';
import HXAlbumCover from 'components/album-cover';
import { getNewAlbumsAction } from '../../store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

import { NewAlbumWarpper } from './style.jsx'

export default memo(function HXNewAlbum() {
  const { newAlbums } = useSelector(state => ({newAlbums:state.getIn(['recommend','newAlbums']) }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])
  return (
    <NewAlbumWarpper>
      <HXThemeHeaderRcm title='新碟上架' />
      <div className='content'>
        <div className='center'>
          <Carousel dots={false}>
          {
            [0,1].map(item => {
              return (
                <div key={item} className='item'>
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map(i => {
                      return <HXAlbumCover key={i.id} 
                                           info={i} 
                                           size={100} 
                                           width={118} 
                                           bgp={-570}/>
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
        </div>  
      </div>
    </NewAlbumWarpper>
  )
})
