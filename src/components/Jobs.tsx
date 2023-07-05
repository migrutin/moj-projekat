import React from 'react'
import komp from '../img/komp.png'
import ugovor from '../img/ugovor.png'
import pp from '../img/pp.png'
import yellow from '../img/yellow.jpg'

function Jobs() {
  return (
    <div className='bg-transparent h-full w-full flex flex-col px-44 py-10 space-y-5'>
        <h1 className='text-3xl mb-10'>Poslovanje</h1>


        <div className='bg-gray-100 h-72 w-full flex px-10'>
            <img src={komp} alt="" className='h-64 w-96 ml-10 mt-3'/>
            <div className='ml-72 mt-16 text-center'>
                <h1 className='font-semibold text-5xl'>ZAPOSLENJE</h1>
                <p className='mt-5'>Postanite deo Gigatron tima.</p>
                <button className='bg-yellow-400 h-10 w-36 rounded-lg mt-5 hover:bg-yellow-600'>Saznaj više</button>
            </div>
            
        </div>

        <div className='bg-gray-100 h-72 w-full flex px-10 '>
            <div className='mt-10 mr-32 text-center'>
                <h1 className='font-semibold text-5xl'>USLOVI KORIŠĆENJA</h1>
                <p className='mt-5'>Opšti uslovi korišćenja Gigatron sajta</p>
                <button className='bg-yellow-400 h-10 w-36 rounded-lg mt-5 hover:bg-yellow-600'>Saznaj više</button>
            </div>
            <img src={ugovor} alt="" className='h-60 w-80 ml-10 mt-3'/>
            
        </div>

        <div className='bg-gray-100 h-72 w-full flex px-10'>
            <img src={pp} alt="" className='h-56 w-72 ml-10 mt-5'/>
            <div className='ml-72 mt-16 text-center'>
                <h1 className='font-semibold text-5xl'>POLITIKA PRIVATNOSTI</h1>
                <p className='mt-5'>Sve o načinu prikupljanja i obrade podataka o ličnosti.</p>
                <button className='bg-yellow-400 h-10 w-36 rounded-lg mt-5 hover:bg-yellow-600'>Saznaj više</button>
            </div>
            
        </div>
        <div>
            <h1 className='text-2xl text-center my-10'>Ukoliko nijedna od ponuđenih opcija ne odgovara razlogu vaše posete ovoj stranici, kontaktirajte nas.</h1>
        </div>

        <div className='bg-yellow-400 h-72 w-full flex px-10'>
            <img src={yellow} alt="" className='h-56 w-96 ml-10 mt-5'/>
            <div className='ml-72 mt-16 text-center'>
                <h1 className='font-semibold text-5xl'>KONTAKT</h1>
                <p className='mt-5'>Imate dodatna pitanja?</p>
                <button className='bg-black h-10 w-36 rounded-lg mt-5 hover:text-white text-yellow-500'>Saznaj više</button>
            </div>
            
        </div>

        




    </div>
  )
}

export default Jobs