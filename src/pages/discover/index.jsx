import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style.jsx'
import { discoverMenu } from '@/common/local-data'
import { renderRoutes } from 'react-router-config';

export default memo(function HXDiscover(props) {
  const { route } = props
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item,index) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
