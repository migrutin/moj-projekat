import desktop from '../img/desktop1.png'
import laptop from '../img/laptopp.png'
import games from '../img/igre.png'
import gaming from '../img/gaming1.jpg'
import { Link } from 'react-router-dom'

const Gaming = () => {
  return (
    <div className='laptop flex flex-col bg-black'>
      <div>
      <img src={gaming} alt="" className='' />
        <div className='flex gaming-products'>
           <Link to='/desktop-racunari' className='justify-center items-center'> <img src={desktop} alt="" className='image-laptop' /> </Link>
           <Link to='/laptops'> <img src={laptop} alt="" className='image-laptop' /></Link>
           <Link to='/games'> <img src={games} alt="" className='image-laptop' /></Link>
    
        </div>
        <h1 className='gaming-h'>Budi nepobediv</h1>
      </div>
    
    </div>
  )
}

export default Gaming