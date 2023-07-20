import tv from '../img/tv.jpg'
import klima from '../img/klime.jpg'
import { useNavigate } from 'react-router-dom'
import slusalice from '../img/philips.jpg'

const SpecijalniPopusti =() =>{

  const navigate = useNavigate()

  const handleNavigateTv = () => {
      navigate('/tv')
  }
  const handleNavigateSlusalice = () => {
    navigate('/novosti')
}

  const handleNavigateKlime = () => {
    navigate('/klime')
}
  return (
    <div>
         <h1 className='font-bold text-2xl ml-44 mt-10'>Specijalni popusti i akcije</h1>
            <div className="grid grid-cols-3 gap-4 w-3/4 ml-44 my-10 space-x-4">
                <div className="rounded-lg h-96 bg-gray-50 ">
                  <img src={tv} alt="" className='rounded-lg' />
                  <h1 className='font-semibold text-center'>Samo ovog meseca popust 20%</h1>
                  <button className='rounded-md h-12 w-36 bg-gray-400 mx-24 my-16' onClick={handleNavigateTv}>Pogledaj ponudu</button>
                </div>
               
                <div className="rounded-lg h-96 bg-gray-50 ">
                  <img src={slusalice} alt="" className='rounded-lg' />
                  <h1 className='font-semibold text-center'>Samo ovog meseca popust 20%</h1>
                  <button className='rounded-md h-12 w-36 bg-gray-400 mx-24 my-12' onClick={handleNavigateSlusalice}>Pogledaj ponudu</button>
                </div>
                
                <div className="rounded-lg h-96 bg-gray-50 ">
                  <img src={klima} alt="" className='rounded-lg' />
                  <h1 className='font-semibold text-center'>Samo ovog meseca popust 20%</h1>
                  <button className='rounded-md h-12 w-36 bg-gray-400 mx-24 my-24' onClick={handleNavigateKlime} >Pogledaj ponudu</button>
                </div>
            </div>
    </div>
  )
}

export default SpecijalniPopusti