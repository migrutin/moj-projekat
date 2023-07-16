import laptopp from '../img/omen.png'
import mouse from '../img/mousee.png'
import bag from '../img/bag.png'
import docker from '../img/docker.png'
import hub from '../img/hub.png'
import charger from '../img/charger.png'
import slika from '../img/slika.jpg'
import cooler from '../img/cooler.png'
import os from '../img/os.png'
import software from '../img/software.png'
import { Link } from 'react-router-dom'

const PortablePC = () => {
  return (
    <div className='laptop flex flex-col bg-gray-100'>
      <div>
      <img src={slika} alt="" className='image-stranica' />
        <div className='laptop-square bg-white items-center justify-center'>
           <Link to='/laptops' className='justify-center items-center'> <img src={laptopp} alt="" className='image-laptop' /> </Link>
           <Link to='/mice'> <img src={mouse} alt="" className='image-laptop' /></Link>
           <Link to='/bags'> <img src={bag} alt="" className='image-laptop' /></Link>
           <Link to='/dockers'> <img src={docker} alt="" className='image-laptop' /></Link>
           <Link to='/chargers'> <img src={charger} alt="" className='image-laptop' /></Link>
           <Link to='/hub'> <img src={hub} alt="" className='image-laptop' /></Link>
           <Link to='/coolers'> <img src={cooler} alt="" className='image-laptop' /></Link>
           <Link to='/os'> <img src={os} alt="" className='image-laptop' /></Link>
           <Link to='/software'> <img src={software} alt="" className='image-laptop' /></Link>
          
           
        </div>
      </div>
    
    </div>
  )
}

export default PortablePC