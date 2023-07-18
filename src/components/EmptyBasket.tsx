import { Link } from 'react-router-dom'
import empty from '../img/empty.png'
function EmptyBasket() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={empty} alt="" className='h-72 w-72' />
        <h1 className='text-5xl align-middle'>Vaša korpa je prazna.</h1>
        <Link to='/' className='text-4xl align-middle'>Vratite se na početnu stranicu.</Link>
    </div>
  )
}

export default EmptyBasket