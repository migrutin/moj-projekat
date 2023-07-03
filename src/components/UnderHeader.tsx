
import React from 'react'

function UnderHeader() {
  return (
    <div className='bg-white max-w-full h-16 flex px-32 justify-between text-base'>



      <div className='flex space-x-2 ml-12'>
        <div className='space-x-1 py-2'><i className="fa-solid fa-bars"></i>
          <a className='text-black font-semibold cursor-pointer text-xl'>Proizvodi</a></div>

          <div className='space-x-1 py-2'><i className="fa-solid fa-heart"></i>
          <a className='text-black font-semibold cursor-pointer text-xl'>Pogodnosti</a></div>

          
        
      </div>

      <div className='flex space-x-2 py-3 mr-72'>
        <a className='text-black cursor-pointer font-semibold'>Akcije</a>
        <a href='https://gigatron.rs/prodavnice' className='text-black cursor-pointer '>Prodavnice</a>
        <a className='text-black cursor-pointer '>Poslovanje</a>
        <a className='text-black cursor-pointer '>Gaming</a>
        <a className='text-black cursor-pointer '>Kontakt</a>
        <a className='text-black cursor-pointer '>Karijera</a>
        <a className='text-black cursor-pointer '>Globaltel</a>
      </div>



    </div>
  )
}

export default UnderHeader