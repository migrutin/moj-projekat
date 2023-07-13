import React from 'react'
import placanje from '../img/placanje.jpg'
import placanjeProdavnica from '../img/placanjeprodavnica.png'
import pouzecem from '../img/pouzecem.png'

function NacinPlacanja() {
    return (
        <div className='bg-transparent h-full w-full flex flex-col px-44 py-10 space-y-5'>
            <h1 className='text-3xl mb-10'>Načini plaćanja</h1>
    
    
            <div className='bg-gray-100 h-72 w-full flex px-10'>
                <img src={placanje} alt="" className='h-64 w-96 ml-10 mt-3'/>
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
                <img src={placanjeProdavnica} alt="" className='h-60 w-80 ml-10 mt-3'/>
                
            </div>
    
            <div className='bg-gray-100 h-72 w-full flex px-10'>
                <img src={pouzecem} alt="" className='h-56 w-72 ml-10 mt-5'/>
                <div className='ml-72 mt-16 text-center'>
                    <h1 className='font-semibold text-5xl'>POLITIKA PRIVATNOSTI</h1>
                    <p className='mt-5'>Sve o načinu prikupljanja i obrade podataka o ličnosti.</p>
                    <button className='bg-yellow-400 h-10 w-36 rounded-lg mt-5 hover:bg-yellow-600'>Saznaj više</button>
                </div>
                
            </div>
            <div>
                <h1 className='text-2xl text-center my-10'>Ukoliko nijedna od ponuđenih opcija ne odgovara razlogu vaše posete ovoj stranici, kontaktirajte nas.</h1>
            </div>
    
            
            
    
    
    
    
        </div>
      )
}

export default NacinPlacanja