import React from 'react'

import Icon from '../Icons'
import '../../sass/components/side-bar/_PinDataSidebar.scss'

const PinDataSidebar = (props) => {
  return (
    <div className="pin-data-wrapper">
      <div className="pin-data-image">
        <img src={props.data.img.thumb.src}/>
      </div>
      <div className="pin-data-header">
        <div className="pin-data-name">
          {props.data.name}
        </div>
        <div className="pin-data-date">
          {props.data.date}
        </div>
      </div>
      <div className="pin-data-actions">
        {
          props.data.hasGallery && 
          <div className="pin-data-action">
            <Icon name="images"/>
            <span>gallery</span>
          </div>
        }
        <div className="pin-data-action">
          <Icon name="copy-outline"/>
          <span>copy link</span>
        </div>
        <div className="pin-data-action">
          <Icon name="star-outline"/>
          <span>favourite</span>
        </div>
      </div>
      <div className="pin-data-desc">
        {props.data.desc}
      </div>
    </div>
  )
}

export default PinDataSidebar