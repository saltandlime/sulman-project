import React, {useState} from 'react'
import { motion } from "framer-motion"

import '../sass/components/_MenuBar.scss'
import MenuBarSub from './menu-bar/MenuBarSub'
import MenuBarCollapse from './menu-bar/MenuBarCollapse'
import Icon from '../components/Icons'

const variants = {
  collapsed: {
    opacity: 0,
    width:0
  },
  notCollapsed: {
    opacity: 1,
    width:'auto',
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: 1,
      type: "ease-in",
      stiffness: 400,
      damping: 40
    }
  }
}


const mainMenu = [
    {
      name:'Edit mode',
      url:''
    },
    {
      name:'Meet the family',
      url:'',
      external:true
    },
    {
      name:'Buy prints',
      url:'',
      external:true
    },
    {
      name:'Upcoming events',
      url:'',
      external:true
    },
    {
      name:'Menu Link 4',
      url:''
    },
    {
      name:'Supporters',
      url:''
    }
]
const layersMenu = [
    {
      id:1,
      name:'Data Layer 1',
      url:'',
      colour:'#187998',
      selected:true
    },
    {
      id:2,
      name:'Data Layer 2',
      url:'',
      colour:'#e5193d'
    },
    {
      id:3,
      name:'Data Layer 3',
      url:'',
      colour:'#f2ae2c'
    },
    {
      id:4,
      name:'Data Layer 4',
      url:'',
      colour:'#4f8c5d'
    },
    {
      id:5,
      name:'Data Layer 5',
      url:'',
      colour:'#62b5bd'
    }
]
const mapsMenu = [
    {
      name:'Cleaned Map',
      url:''
    },
    {
      name:'Original Map',
      url:''
    }
]

const MenuBar = (props) => {

  //const [isOpen, toggleOpen] = useCycle(false, true)
  const [isOpen, toggleOpen] = useState(false)
  const [menuType, setType] = useState(null)
  const [isCollapsed, collapseMenu] = useState(false)

  const [currlayer,setLayer] = useState(1)

  const openMenu = (type) => {
    if(type !== menuType && isOpen){
      //close and reopen
      toggleOpen(false)
      setTimeout(() => {
        setType(type)
        toggleOpen(true)
      },500)
    } else {
      if(isOpen){
        toggleOpen(false)
        setType(null)
      } else {
        toggleOpen(true)
        setType(type)
      }
      
    }
  }

  const toggleCollapseMenu = () => {
    //if menu open
    if(isOpen){
      toggleOpen(false)
      setType(null)
    }
    collapseMenu(!isCollapsed)
  }

  const selectLayer = (layer) =>{
    setLayer(layer.id)
    props.selectDataLayer(layer)
  }

  const getLayersMenu = () => {
    return [
      ...layersMenu,
      {
        id:999,
        name:'Favourites',
        url:'',
        colour:'#4f8c5d'
      }
    ].map(layer => {
      layer.selected = false
      if(layer.id === currlayer){
        layer.selected = true
      }
      return layer
    })
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      >
      <motion.div 
        animate={isCollapsed ? 'collapsed' : 'notCollapsed'}
        className="main-menu-bar">
        <motion.div 
          className="menu-bar-left"
          variants={variants}>
          <div className={`menu menu-bar-item ${menuType === 'main' && 'active'}`}>
            <Icon name="menu" action={() => openMenu('main')}/>
          </div>
          <div className={`data-layer menu-bar-item ${menuType === 'main' && 'layers'}`}>
            <Icon name="layers-outline" action={() => openMenu('layers')}/>
          </div>
          <div className={`map-layer menu-bar-item ${menuType === 'main' && 'maps'}`}>
            <Icon name="map-outline" action={() => openMenu('maps')}/>
          </div>
          <div className={`active-inticator ${menuType}`}></div>
        </motion.div>
        <div className="menu-bar-right">
          <MenuBarCollapse toggleCollapseMenu={()=>toggleCollapseMenu()}/>
        </div>
      </motion.div>
      <MenuBarSub
        isOpen={isOpen} 
        menuType={menuType}
        mainMenu={mainMenu}
        mapsMenu={mapsMenu}
        layersMenu={getLayersMenu()}
        //getLayersMenu={(layer)=>getLayersMenu(layer)}
        selectLayer={(layer) => selectLayer(layer)}/>
    </motion.div>
  )
}

export default MenuBar