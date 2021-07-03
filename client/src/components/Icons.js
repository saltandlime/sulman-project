import React, {useState} from 'react'

import '../sass/components/_Icon.scss'

const Icon = (props) => {

  const [hover,isHovered] = useState(false)

  const hoverOn = () => {
    isHovered(true)
  }

  const hoverOff = () => {
    isHovered(false)
  }

  return (
    <span
      className={`icon-wrapper`}
      onMouseEnter={()=>hoverOn()}
      onMouseLeave={()=>hoverOff()}
      onClick={()=>props.action && props.action()}>
      <ion-icon 
        name={props.name} 
        class={`icon icon-action icon-${props.name} hydrated ${hover ? 'hover' : null}`}>
      </ion-icon>
    </span>
  )
}

export default Icon