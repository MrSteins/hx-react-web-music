import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderWarpper,
  LeftWarpper,
  RightWarpper
} from './style.jsx'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '@/common/local-data';


export default memo(function HXAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (<li key={item.title}><NavLink to={item.link}>{item.title}<i className='icon sprite_01'></i></NavLink></li>)
    }

    return (<li key={item.title}><a href={item.link}>{item.title}</a></li>)
  }
  return (
    <HeaderWarpper>
      <div className='content wrap-v1'>
        <LeftWarpper>
          <h1 className='logo sprite_01'>
            <NavLink to='/'>网易云音乐</NavLink>
          </h1>
          <ul>
            {
              headerLinks.map(showSelectItem)
            }
          </ul>
        </LeftWarpper>
        <RightWarpper>
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </RightWarpper>
      </div>
      <div className='divider'></div>
    </HeaderWarpper>
  )
})
