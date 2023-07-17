import tv from '../img/tv.png'
import projektor from '../img/projektor.png'
import audio from '../img/audio-video.png'
import baterija from '../img/baterija.jpg'
import elektro from '../img/elektro.png'
import radio from '../img/radioStanice.png'
import tvHead from '../img/tv-head.jpg'
import { Link } from 'react-router-dom'

const TvAudioVideo = () => {
  return (
    <div className='laptop flex flex-col bg-gray-100'>
      
      <img src={tvHead} alt="" className='image-stranica' />
        <div className='laptop-square bg-white items-center justify-center'>
           <Link to='/tv' className='justify-center items-center'> <img src={tv} alt="" className='image-laptop' /> </Link>
           <Link to='/projektori'> <img src={projektor} alt="" className='image-laptop' /></Link>
           <Link to='/audio-video-oprema'> <img src={audio} alt="" className='image-laptop' /></Link>
           <Link to='/baterije'> <img src={baterija} alt="" className='image-laptop' /></Link>
           <Link to='/radio-stanice'> <img src={radio} alt="" className='image-laptop' /></Link>
           <Link to='/elektro-zastita'> <img src={elektro} alt="" className='image-laptop' /></Link>
           
           
       
      </div>
    
    </div>
  )
}

export default TvAudioVideo