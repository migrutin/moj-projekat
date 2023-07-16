import tastatura from '../img/tastatura.png'
import monitori from '../img/monitori.png'
import mis from '../img/mousee.png'
import podloga from '../img/podloga.png'
import stampaci from '../img/stampac.png'
import zvucnici from '../img/zvucnici.png'
import mikrofon from '../img/mikrofon.png'
import kabl from '../img/kabl.png'
import { Link } from 'react-router-dom'

const Oprema = () => {
  return (

    <div className='laptop flex flex-col bg-gray-100'>
      <div>
        
        <div className='laptop-square bg-white items-center justify-center'>
          <Link to='/monitori'> <img src={monitori} alt="" className='image-laptop' /></Link>
          <Link to='/mice'> <img src={mis} alt="" className='image-laptop' /></Link>
          <Link to='/tastature'> <img src={tastatura} alt="" className='image-laptop' /></Link>
          <Link to='/podloge'> <img src={podloga} alt="" className='image-laptop' /></Link>
          <Link to='/stampaci'> <img src={stampaci} alt="" className='image-laptop' /></Link>
          <Link to='/zvucnici'> <img src={zvucnici} alt="" className='image-laptop' /></Link>
          <Link to='/mikrofoni'> <img src={mikrofon} alt="" className='image-laptop' /></Link>
          <Link to='/kablovi'> <img src={kabl} alt="" className='image-laptop' /></Link>



        </div>
      </div>

    </div>
  )
}

export default Oprema