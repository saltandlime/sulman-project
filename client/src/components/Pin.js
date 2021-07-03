import React, {useState} from 'react'

import '../sass/components/_Pin.scss'

const Pin = ({colour,data,expandPin}) => {

  const [isHovered,hover] = useState(false)
  return (
    <div className="map-pin" 
      onClick={()=>expandPin(data)}
      onMouseEnter={() => hover(true)}
      onMouseLeave={()=>hover(false)}
      style={{
        position:'absolute',
        top:`${data.position.y}px`,
        left:`${data.position.x}px`
      }}>
      <div className="pin-name">
        {data.name}
      </div>
      <svg width="358px" height="552px" viewBox="0 0 358 552" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(3.000000, 3.000000)" fillRule="nonzero">
            <g id="Map_marker" fill={colour ? colour : '#187998'} stroke={isHovered ? '#000000' : '#ffffff'} strokeLinejoin="round" strokeWidth="12">
              <path d="M175.9,544.7 C175.9,544.8 176.1,545 176.1,545 C176.1,545 351.3,276 351.3,187.6 C351.3,57.5 262.5,0.9 175.9,0.7 C89.3,0.9 0.5,57.5 0.5,187.6 C0.5,276 175.8,545 175.8,545 C175.8,545 175.9,544.7 175.9,544.7 Z M115.2,180.2 C115.2,146.6 142.4,119.4 176,119.4 C209.6,119.4 236.8,146.6 236.8,180.2 C236.8,213.8 209.5,241 175.9,241 C142.4,241 115.2,213.8 115.2,180.2 Z" id="Shape"></path>
            </g>
            <ellipse id="Oval" fill={isHovered ? '#000000' : '#ffffff'} cx="176.5" cy="180" rx="62.5" ry="62"></ellipse>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pin