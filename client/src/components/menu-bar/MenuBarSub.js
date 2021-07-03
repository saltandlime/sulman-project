import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import '../../sass/components/menu-bar/_MenuBarSub.scss'
import MenuBarSubMain from './MenuBarSubMain'
import MenuBarSubLayer from './MenuBarSubLayer'
import MenuBarSubMaps from './MenuBarSubMaps'

const variants = {
  open: {
    opacity: 1,
    height:'auto',
    transition: { 
      staggerChildren: 0.07, 
      delayChildren: 0.2 
    }
  },
  closed: {
    opacity: 0,
    height:0,
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: -1,
      delayChildren: 0.2,
      duration:0.2
    }
  }
}
const MenuBarSub = ({
  isOpen,
  menuType,
  mainMenu,
  layersMenu,
  mapsMenu,
  selectLayer
}) => {

  const getSubMenu = () => {
    switch(menuType){
      case 'main':
        return mainMenu.map((item,index) => (
          <MenuBarSubMain item={item} key={index} />
        ))
      case 'layers':
        return layersMenu.map((item,index) => (
          <MenuBarSubLayer item={item} key={index} selectLayer={(item) => selectLayer(item)}/>
        ))
      case 'maps':
        return mapsMenu.map((item,index) => (
          <MenuBarSubMaps item={item} key={index} />
        ))
    }
  }

  return (
    <AnimatePresence>
      {
        isOpen && <motion.div 
          className="menu-bar-sub" 
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}>
          {getSubMenu()}
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default MenuBarSub