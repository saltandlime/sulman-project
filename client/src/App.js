import React, {useState} from 'react'

import './App.scss'

import MenuBar from './components/MenuBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Icon from './components/Icons'
import Pin from './components/Pin'


const pins = [
  {
    id:1,
    position:{
      x:500,
      y:400
    },
    name:'Argyll Arcade, Glasgow',
    desc:'The Argyll Arcade is the oldest shopping arcade in Scotland and was modelled on the Parisian Arcades of the late 18th century. It connects Argyle Street with Buchanan St and today is home to many jewellery and watch shops.',
    date:'1827',
    img:{
      original:{
        src:'/images/Argyle_Arcade.jpg'
      },
      thumb:{
        src:'/images/Argyle_Arcade_thumb.png'
      }
    },
    hasGallery:true
  },
  {
    id:2,
    position:{
      x:700,
      y:600
    },
    name:'Provand\'s Lordship, 3 Castle Street, Glasgow',
    desc:'Provand’s Lordship was built in 1471 and is one of only four surviving medieval buildings in Glasgow.',
    date:'1471',
    img:{
      original:{
        src:'/images/Provands_Lordship.jpg'
      },
      thumb:{
        src:'/images/Provands_Lordship_thumb.jpg'
      }
    },
    hasGallery:true
  },
]

function App() {

  const [currLayer, setDataLayer] = useState(false)
  const [isSidebarOpen, openSidebar] = useState(false)
  const [sidebarData,setSidebarData] = useState(null)
  
  const selectDataLayer = (layer) => {
    setDataLayer(layer)
  }

  const expandPin = (data) => {
    if(isSidebarOpen && data.id !== sidebarData.data.id){
      openSidebar(false)
      var timeout = setTimeout(()=>{
        openSidebar(true)
        setSidebarData({
          type:'pin-data',
          data:data
        })
        timeout = null
      },200)
    } else {
      openSidebar(true)
      setSidebarData({
        type:'pin-data',
        data:data
      })
    }
    
  }

  const closeSidebar = () => {
    openSidebar(false)
  }

  return (
    <div className="App">
      <MenuBar
        selectDataLayer={(layer) => selectDataLayer(layer)}
      />
      <div className="zoom-controls">
        <div className="controls">
          <Icon name="add"/>
        </div>
        <div className="spacer"></div>
        <div className="controls">
          <Icon name="remove"/>
        </div>
      </div>
      <Pin
        expandPin={(data) => expandPin(data)}
        data={pins[0]}
        colour={currLayer.colour}
      />
      <Pin
        expandPin={(data) => expandPin(data)}
        data={pins[1]}
        colour={currLayer.colour}
      />
      <Sidebar 
        data={sidebarData}
        isOpen={isSidebarOpen}
        closeSidebar={() => closeSidebar()}/>
      <Footer/>
    </div>
  );
}

export default App;
