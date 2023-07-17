import mobile from '../img/mobile.jpg'
import tablet from '../img/tablet.png'
import sat from '../img/sat.png'
import slusalice from '../img/slusalice.png'
import zvucnik from '../img/bzvucnik.png'
import eksterna from '../img/eksterna.png'
import memorijska from '../img/memorijska.png'
import { Link } from 'react-router-dom'

const MobilniOprema = () => {
  return (
    <div className='laptop flex flex-col bg-gray-100'>
      
        <div className='laptop-square bg-white items-center justify-center'>
           <Link to='/mobilni' className='justify-center items-center'> <img src={mobile} alt="" className='image-laptop' /> </Link>
           <Link to='/tablet-racunari'> <img src={tablet} alt="" className='image-laptop' /></Link>
           <Link to='/pametni-satovi'> <img src={sat} alt="" className='image-laptop' /></Link>
           <Link to='/slusalice'> <img src={slusalice} alt="" className='image-laptop' /></Link>
           <Link to='/bezicni-zvucnici'> <img src={zvucnik} alt="" className='image-laptop' /></Link>
           <Link to='/eksterne-baterije'> <img src={eksterna} alt="" className='image-laptop' /></Link>
           <Link to='/memorijske-kartice'> <img src={memorijska} alt="" className='image-laptop' /></Link>
          
          
           
        </div>
      </div>
    
  )
}

export default MobilniOprema