import React, { memo } from 'react'
import propTypes from 'prop-types';

import { HeaderWarpper } from './style.jsx';

const HXthr = memo(function HXThemeHeaderRcm(props) {
  const { title, keywords } = props

  return (
    <HeaderWarpper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map(item => {
              return (
                <div key={item} className='item'>
                  <a href="">{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href="">更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWarpper>
  )
})

HXthr.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array
}

HXthr.defaultProps = {
  keywords: []
}


export default HXthr