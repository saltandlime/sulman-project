import React from 'react'
import { motion } from "framer-motion"

import Icon from '../Icons'
import '../../sass/components/menu-bar/_MenuBarSubItem.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -5,
    opacity: 0
  }
}

const MenuBarSubItem = (props) => {
  return (
    <motion.div
      variants={variants}
      className="menu-bar-sub-item"
      >
      <div className="menu-bar-sub-item-text">{props.item.name}</div>
      {
        props.item.external && <Icon name="open"/>
      }
    </motion.div>
  )
}

export default MenuBarSubItem