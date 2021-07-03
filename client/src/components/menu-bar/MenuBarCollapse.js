import React from 'react'
import { motion } from "framer-motion"

import Icon from '../Icons'

const variants = {
  container:{
    collapsed: {
      x:-243
    },
    notCollapsed: {
      x:0
    }
  },
  icon:{
    collapsed: {
      rotate:-180
    },
    notCollapsed: {
      rotate:0
    }
  }
}

const MenuBarCollapse = ({toggleCollapseMenu}) => {

  return (
    <motion.div variants={variants.container}>
      <div className="close menu-bar-item">
        <motion.div variants={variants.icon}>
          <Icon name="chevron-back-outline" action={() => toggleCollapseMenu()}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MenuBarCollapse