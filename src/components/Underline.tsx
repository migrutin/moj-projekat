import React from 'react'
import { Link } from 'react-router-dom'

function Underline() {
  return (
    <div className='bg-white max-w-full h-16 flex px-32 justify-between text-base border-b-2'>



      <div className='flex space-x-2 ml-12'>
        <div className='space-x-1 py-2'><i className="fa-solid fa-bars"></i>
          <a className='text-black font-semibold cursor-pointer text-xl'>Proizvodi</a></div>

          <div className='space-x-1 py-2'><i className="fa-solid fa-heart"></i>
          <a className='text-black font-semibold cursor-pointer text-xl'>Pogodnosti</a></div>

          
        
      </div>

      <div className='flex space-x-4 py-3 mr-72'>
        <Link to='/akcije' className='text-black cursor-pointer font-semibold'>Akcije</Link>
        <a href='https://gigatron.rs/prodavnice' className='text-black cursor-pointer '>Prodavnice</a>
        <Link to='/poslovanje' className='text-black cursor-pointer '>Poslovanje</Link>
        <Link to='/poslovanje' className='text-black cursor-pointer '>Gaming</Link>
        <Link to='/kontakt' className='text-black cursor-pointer '>Kontakt</Link>
        <Link to='/karijera'className='text-black cursor-pointer '>Karijera</Link>
        <Link to='/globaltel' className='text-black cursor-pointer '>Globaltel</Link>
      </div>



    </div>
  )
}

export default Underline



