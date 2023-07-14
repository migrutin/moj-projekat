import React from 'react'
import globb from '../img/globb.png'
import GlobKvadrat from './GlobKvadrat'
import GlobTekst from './GlobTekst'


const Glob = () => {
    return (
        <div className='promocije'>
            <h1 className='promocije-naslov'>Izaberi Globaltel tarifu u Gigatronu uz telefon</h1>
            <div className='promocije-linija'></div>
            <div className='px-10'>
                <img src={globb} alt="" className='glob-slika' />
                <GlobTekst></GlobTekst>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-16 ">
               
                <GlobKvadrat></GlobKvadrat>
                <GlobKvadrat></GlobKvadrat>
                <GlobKvadrat></GlobKvadrat>
                <GlobKvadrat></GlobKvadrat>
              
            </div>



        </div>
    )
}

export default Glob