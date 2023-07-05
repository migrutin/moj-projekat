import React from 'react'
import cart from '../img/cart.png'

function EmptyBasket() {
  return (
    <div className='flex items-center justify-center sm:h-screen/2 flex-col mb-24 mt-5'>
        <img src={cart} alt="shopping-cart" className='h-72 w-72' />
        <h1 className='font-semibold mt-5 ml-5'>Vaša korpa je prazna</h1>
        <a href='#' className='text-gray-600 ml-5 hover:underline'>Vratite se na početnu stranicu</a>
    </div>
  )
}

export default EmptyBasket