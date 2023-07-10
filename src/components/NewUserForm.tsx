import React from 'react'
import { Link } from 'react-router-dom'
import face from '../img/face.png'
import gmail from '../img/gmail.png'
import cell from '../img/cell.png'

function NewUserForm() {
  return (
    <div className='bg-gray-100 sm:h-screen sm:w-full sm:flex sm:items-center sm:justify-center'>
        <div className='bg-white h-350px w-96 py-5 px-5 rounded-lg'>
            <h1 className='text-xl'>Vaš Gigatron nalog</h1>
            <div className='flex'>
            <h3 className='text-sm'>Već imate Gigatron nalog?</h3>
            <Link to='/sign-in' className='text-sm text-blue-700 underline ml-1'>Prijavi se</Link>
            </div>

            <div className='mt-3'>
                <p>Email adresa *</p>
                <input type="" className='w-full h-10 rounded-md mt-2 border-solid border-2'/>

            </div>
            
            <div className='mt-3'>
                <p>Lozinka*</p>
                <input type="" className='w-full h-10 rounded-md mt-2 border-solid border-2'/>
                <a href='#' className='text-sm text-blue-700 underline'>Zaboravili ste lozinku?</a>

            </div>

            <button className='bg-blue-500 text-white w-full h-12 font-bold mt-5 rounded-lg'> Registrujte se

            </button>

            <p className='text-gray-500 text-sm text-center mt-5'>Odaberite drugu opciju za prijavu</p>

            <div className='space-x-2 mt-2 ml-4'>
                <button className='bg-white border-solid border-2 w-24 '>
                    <img src={face} alt="" className='w-8 h-8 ml-6'/>
                </button>
                <button className='bg-white border-solid border-2 w-24 '>
                    <img src={gmail} alt="" className='w-8 h-8 ml-6'/>
                </button>
                <button className='bg-white border-solid border-2 w-24 '>
                    <img src={cell} alt="" className='w-8 h-8 ml-6'/>
                </button>
                
            </div>

            <div className='rounded-lg border-solid border-2 text-center mt-4'>
                 <p>Kupovinom kao registrovani kupac ostvarujete pravo na Gigatron bodove koji vam donose i do 50% popusta pri sledećoj kupovini.</p>
                 </div>

        </div>

    </div>
  )
}

export default NewUserForm