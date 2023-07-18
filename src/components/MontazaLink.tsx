import { Link } from 'react-router-dom'
import logomajstor from '../img/logomajstor.png';
import majstor from '../img/majstor.png'

const MontazaLink =() => {
  return (
    <div>
        <Link to="/montaza-televizora">
                <div className='bg-blue-900 rounded-lg h-24 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={logomajstor} alt="" className='h-32 w-32 ' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>USLUŽNA MONTAŽA</h1>
                        <p className='font-bold text-2xl text-white'>televizora i samostojeće bele tehnike</p>
                    </div>
                    <img src={majstor} alt="majstor" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>
    </div>
  )
}

export default MontazaLink