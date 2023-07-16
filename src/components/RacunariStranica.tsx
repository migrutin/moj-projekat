
import racunari from '../img/racunari.jpg'
import desktop from '../img/desktop.jpg'
import brand from '../img/brand.png'
import all from '../img/allIn.jpg'
import monitori from '../img/monitori.png'
import komponente from '../img/komponente.jpg'
import software from '../img/soft.png'
import igre from '../img/igre.png'

import { Link } from 'react-router-dom'

const RacunariStranica = () => {
  return (

    <div className='laptop flex flex-col bg-gray-100'>
      <div>
        <img src={racunari} alt="" className='image-stranica' />
        <div className='laptop-square bg-white items-center justify-center'>
          <Link to='/desktop-racunari'> <img src={desktop} alt="" className='image-laptop' /></Link>
          <Link to='/brand-name-racunari'> <img src={brand} alt="" className='image-laptop' /></Link>
          <Link to='/all-in-one'> <img src={all} alt="" className='image-laptop' /></Link>
          <Link to='/monitori'> <img src={monitori} alt="" className='image-laptop' /></Link>
          <Link to='/komponente'> <img src={komponente} alt="" className='image-laptop' /></Link>
          <Link to='/software'> <img src={software} alt="" className='image-laptop' /></Link>
          <Link to='/igre'> <img src={igre} alt="" className='image-laptop' /></Link>



        </div>
      </div>

    </div>
  )
}

export default RacunariStranica