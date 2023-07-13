import React from 'react'
import laptopp from '../img/laptopp.png'
import mouse from '../img/mouse.png'
import bag from '../img/bag.png'
import docker from '../img/docker.png'
import hub from '../img/hub.png'
import charger from '../img/charger.png'
import cooler from '../img/cooler.png'
import os from '../img/os.png'
import software from '../img/software.png'
import { Link } from 'react-router-dom'

function PortablePC() {
  return (
    <div className='laptop'>
        <div className='laptop-square'>
           <Link to='/laptops'> <img src={laptopp} alt="" className='image-laptop' /></Link>
           <Link to='/mice'> <img src={mouse} alt="" className='image-laptop' /></Link>
           <Link to='/bags'> <img src={bag} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={docker} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={charger} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={hub} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={cooler} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={os} alt="" className='image-laptop' /></Link>
           <Link to='/laptops'> <img src={software} alt="" className='image-laptop' /></Link>
          
           
        </div>
    </div>
  )
}

export default PortablePC