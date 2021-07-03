import React from 'react'
import { motion } from "framer-motion"

import '../../sass/components/menu-bar/_MenuBarSubItem.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { velocity: 100 }
    }
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const MenuBarSubItem = (props) => {
  return (
    <motion.div
      variants={variants}
      className="menu-bar-sub-item"
      >
      <div className="menu-bar-sub-item-text">{props.item.name}</div>
    </motion.div>
  )
}

export default MenuBarSubItem