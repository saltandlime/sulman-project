import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

import Icon from './Icons'
import PinDataSidebar from './side-bar/PinDataSidebar'

import '../sass/components/_Sidebar.scss'

const variants = {
  closed: {
    width:'300px',
    opacity: 0,
    transform:'translateX(100%)',
    transition:{
      duration:0.2,
    }
  },
  open: {
    opacity: 1,
    width:'300px',
    transform:'translateX(0%)',
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: 1,
      duration:0.2
    }
  }
}
const Sidebar = (props) => {

  const getView = () => {
    switch(props.data.type){
      case 'pin-data':
        return <PinDataSidebar data={props.data.data}/>
    }
  }

  return (
    <AnimatePresence>
      {
        props.isOpen && <motion.div 
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants} 
          className="sidebar-wrapper">
          <div className="sidebar-header">
            <Icon name="close" action={()=>props.closeSidebar()}/> 
          </div>
          {props.data && getView()}
        </motion.div>
      }
    </AnimatePresence>
  )

}

export default Sidebar