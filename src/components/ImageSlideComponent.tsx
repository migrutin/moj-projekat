import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import i from '../img/i.jpg'
import samsungg from '../img/samsungg.jpg'
import xiaomi from '../img/xiaomi.jpg'

const ImageSlideComponent = () => {
    const [image, setImage] = useState(0);
    const navigate = useNavigate();

    const handleNavigation=()=> {
        navigate('/akcije')
    }

    const images= [
        i, samsungg, xiaomi
        
    ]

    const handlePrevious = () => {
        setImage ((prevImage) => (prevImage === 0 ? images.length -1 : prevImage - 1));
    };

    const handleNext = ()=> {
        setImage ((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage +1));
    }
  return (
   
                <div className="relative bg-green-200 w-3/4 rounded-lg z-10">
                    <img src={images[image]} alt={`Image ${image + 1}`} className='h-full w-full rounded-lg'/>
                    <button className="absolute bottom-2 right-2 rounded-full
                             font-semibold bg-gray-100 h-8 w-32 hover:bg-gray-200" onClick={handleNavigation}>
                        Saznajte više
                    </button>

                    <div className='flex-col space-x-10'>
                        <button className="absolute rounded-full bottom-2 left-2
                             font-semibold bg-gray-100 h-8 w-8 hover:bg-gray-200" onClick={handlePrevious}>
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                        <button className="absolute rounded-full bottom-2 left-1
                             font-semibold bg-gray-100 h-8 w-8 hover:bg-gray-200" onClick={handleNext}>
                             <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>
              
  )
}

export default ImageSlideComponent