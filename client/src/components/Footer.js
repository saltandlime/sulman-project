import React from 'react'

import Icon from './Icons'

import '../sass/components/_Footer.scss'
import GCHTLogo from '../assets/img/gcht-logo-black-reduced.png'

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <img src={GCHTLogo}/>
      </div>
      <div className="footer-action">
        <Icon name="open-outline"/>
      </div>
    </div>
  )
}

export default Footer