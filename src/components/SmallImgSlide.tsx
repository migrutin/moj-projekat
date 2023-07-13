import applewatch from '../img/applewatch2.jpg'
import airpods from '../img/airpods.jpg'
import zvucnik from '../img/zvucnik.jpg'
import { useState } from 'react'

function SmallImgSlide() {

  const [image, setImage] = useState(0)

  const images = [airpods, applewatch, zvucnik]

  const handlePrevious = () => {
    setImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  }


  return (
    <div className='small-slide-bg'>
      <h1 className='small-img-h'>Za Vas izdvajamo</h1>
      <img src={images[image]} alt={`Image ${image + 1}`} className='small-img-slide' />
      <button className="button-img top-36 left-3">
        <i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={handlePrevious}></i>

      </button>

      <button className="button-img top-36 right-3" >
        <i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={handlePrevious}></i>

      </button>
      <p className='mt-10'>*Ponuda vazi do kraja meseca</p>
    </div>
  )
}

export default SmallImgSlide