import React from 'react'
import { motion } from "framer-motion"

import Icon from '../../components/Icons'

import '../../sass/components/menu-bar/_MenuBarSubLayer.scss'

const variants = {
  open: {
    y:0,
    opacity: 1
  },
  closed: {
    y: -5,
    opacity: 0
  }
}

const MenuBarSubLayer = ({item,selectLayer}) => {
  return (
    <motion.div
      variants={variants}
      className="menu-bar-sub-layer"
      onClick={() => selectLayer(item)}>
      <div className="layer-left">
        {
          item.id === 999 ? 
          <Icon name="star"/> : 
          <div className="layer-indicator" style={{backgroundColor:item.colour}}></div>
        }
        <div className="layer-text">
          {item.name}
        </div>
      </div>
      <div className="layer-right">
        {item.selected ? <Icon name="checkmark"/> : null}
      </div>
    </motion.div>
  )
}

export default MenuBarSubLayer