

import { Link } from 'react-router-dom'
import glob from '../img/glob.png'
import majstor from '../img/majstor.png'

const MajstorLink = () => {
  return (
    <div>
         <Link to="/globaltel">
                <div className='bg-purple-950 rounded-lg h-24 w-3/4 mt-32 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={glob} alt="" className='h-20 w-32 ml-2 mt-1' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>Globaltel POSTPAID paketi uz telefone</h1>
                        <p className='font-bold text-2xl text-white'>u svim Gigatron prodavnicama!</p>
                    </div>
                    <img src={majstor} alt="" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>
    </div>
  )
}

export default MajstorLink