import vivo from '../img/vivo.png'
import tarifa from '../img/tarife.png'

const GlobKvadrat = () => {
  return (
    <div className="globaltel-kvadrat">
                    <h1 className='telefon'>VIVO Y22s 6/128GB Startlit Blue </h1>
                    <div className='flex space-x-3 mt-5'>
                        <img src={vivo} alt="" className='h-72 w-64 mt-10' />
                        <img src={tarifa} alt="" className='h-72 w-56 mt-10'/>
                    </div>
                    <button className='globaltel-dugme'>Pogledajte ponudu</button>
                </div>
  )
}

export default GlobKvadrat