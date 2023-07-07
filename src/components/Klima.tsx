import React from 'react'

import gigprom from '../img/gigprom.jpg'
import gigprom2 from '../img/gigprom2.jpg'
import klime from '../img/klime.jpg'
import klimaa from '../img/klimaa.jpg'
import { Link } from 'react-router-dom'


function Klima() {
    return (
        <div className='h-full w-full bg-white px-44 py-10'>
            <h1 className='text-2xl'>Promocije u prodavnicama</h1>
            <div className='h-px w-full bg-gray-400 mt-3'></div>
            <div className='px-10'>
                <img src={klimaa} alt="" className='mt-10 h-64 w-full' />
                <p className='mt-10 mb-5 ml-10 text-sm'> <span className='font-bold'>GREE klima-uređaji </span>spadaju među jedne od najpopularnijih izbora kada je u pitanju klimatizacija životnog prostora. Ovi uređaji su poznati po svojoj izuzetnoj efikasnosti i naprednim funkcijama koje pružaju vrhunski komfor i energetsku uštedu. Jedna od ključnih karakteristika GREE klima je njihova ekološka orijentacija. Koristeći ekološki prihvatljiv R32 gas, ovi uređaji smanjuju emisiju štetnih gasova, doprinoseći zaštiti životne sredine. GREE klima-uređaji imaju odlične sisteme prečišćavanja vazduha, pa tako kvalitetni filteri efikasno uklanjaju alergene, prašinu, bakterije i neprijatne mirise, obezbeđujući čist i svež vazduh u prostoriji. Osim toga, GREE klime imaju mogućnost inteligentne raspodele vazduha koja omogućava ravnomerno hlađenje ili grejanje prostorije, bez nepotrebnog gubitka energije. Kontrola GREE klima-uređaja je jednostavna i praktična. Možete koristiti daljinski upravljač ili integrisani Wi-Fi Smart modul, koji pruža mogućnost jednostavnog  upravljanja putem mobilnog telefona, čak i sa udaljene lokacije.</p>

                <p className='ml-10 text-sm'>U periodu od <span className='font-bold'>  7. 7. do 8. 7. 2023.</span> godine <span className='font-bold'>GREE klima-uređaj inverter Muse Evo 12k Wi-Fi</span>  očekuje vas 
                po sniženoj ceni od <span className='font-bold'>62.999 RSD</span>, dok vas GREE Pular Eco Plus 12k inverter klima-uređaj očekuje po
                 sniženoj ceni od<span className='font-bold'> 50.999 RSD</span> Iskoristite priliku i izaberite jedan od ova dva modela GREE inverter
                  klima-uređaja po sniženim cenama iz naše ponude, koji će zadovoljiti vaše potrebe za udobnošću, energetskom efikasnošću
                   i očuvanjem životne sredine.</p>
                
            </div>



            
            <div className="grid sm:grid-cols-1 md:grid-cols-2  mx-16 mt-10">
                {/* prvi */}
                <div className="box border-solid border-2">
                    <div className=' '>
                        {/* PROMENITI LINKOVEE!!! */}
                        <Link to='https://gigatron.rs/inverter-klime/gree-klima-uredjaj-inverter-muse-evo-12k-wifi-474935'>
                        <img src={klime} alt="" />
                        <h1 className='font-bold'>GREE klima-uređaj inverter Muse Evo 12k Wi-Fi</h1>
                        <p className='line-through text-gray-300 text-md mt-16'>78.999 RSD</p>
                        <p className='font-bold text-2xl'>62.999 RSD</p>
                        <p className='text-red-500'>Ušteda: 16.000 RSD </p>
                        </Link>
                      
                    </div>
                </div>

                <div className="box border-solid border-2">
                    <div className=' '>
                        <Link to='https://gigatron.rs/inverter-klime/gree-klima-uredjaj-inverter-muse-evo-12k-wifi-474935'>
                        <img src={klime} alt="" />
                        <h1 className='font-bold'>GREE klima-uređaj inverter Muse Evo 12k Wi-Fi</h1>
                        <p className='line-through text-gray-300 text-md mt-16'>78.999 RSD</p>
                        <p className='font-bold text-2xl'>62.999 RSD</p>
                        <p className='text-red-500'>Ušteda: 16.000 RSD </p>
                        </Link>
                      
                    </div>
                </div>

               
            </div>

            



        </div>
    )
}

export default Klima