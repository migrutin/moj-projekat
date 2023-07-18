
import a from '../img/a.png'
import samsung from '../img/samsung.png'
import appdevice from '../img/appdevice.png'
import sams from '../img/sams.png'
import { useNavigate } from 'react-router-dom'

const AppleSamsung = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/mobilni')
    }
    return (
        <div>
            <div className='custom-height w-3/4 ml-44 mt-10 flex justify-between space-x-3'>
                <div className='rounded-lg w-1/2  bg-gray-200 flex-col flex items-center justify-top '>
                    <img src={samsung} alt="" className='w-1/3 ' />
                    <h1 className='font-bold text-3xl text-center'>Zakorači u Samsung <br></br>e-svet</h1>
                    <button className='h-10 w-32 rounded-full mt-5 bg-white' onClick={handleNavigate}>Saznajte više</button>
                    <img src={sams} alt="samsung uredjaji" className='h-56 mt-10' />
                </div>

                <div className='rounded-lg w-1/2  bg-green-200 flex-col flex items-center justify-top '>
                    <img src={a} alt="" className='w-1/3 mt-3' />
                    <h1 className='font-bold text-3xl text-center mt-5'>Besprekorno iskustvo  u <br></br>svakom uređaju</h1>
                    <button className='h-10 w-32 rounded-full mt-5 bg-white' onClick={handleNavigate} >Saznajte više</button>
                    <img src={appdevice} alt="apple uredjaji" className='h-44 w-96 mt-16' />

                </div>


            </div>
        </div>
    )
}

export default AppleSamsung