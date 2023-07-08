import React from 'react'
import gigprom from '../img/gigprom.jpg'
import gigprom2 from '../img/gigprom2.jpg'
import masina from '../img/masina.jpg'
import kosilica from '../img/kosilica.jpg'

function PromotionSection() {
  return (
    <div>
         {/* KVADRATI */}
         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-16 ">
                {/* prvi */}
                <div className="bg-white custom-height2 shadow-lg shadow-gray-400 py-3 px-3">
                    <div className='bg-gray-300 h-12 w-full'>
                        <div className='flex'>
                            <p>15% popusta na Tesla televizore i belu tehniku u SC Stadion – </p>
                            <h1 className='font-bold text-red-500 ml-2'>ISTEKLA PROMOCIJA</h1>

                        </div>
                        <div className='flex space-x-3 mt-5 mx-5'>
                            <img src={gigprom} alt="" className='h-48 w-56 mt-10' />
                            <div className='space-y-5 text-sm'>
                            <p>Snižene cene Tesla televizora i bele tehnike u našoj prodavnici u Stadion shopping centru.</p>
                            <p className='mb-5'>Iskoristite 15% popusta na Tesla televizore i belu tehniku, samo u prodavnicama G09 i G49. Više informacija o popustu možete da dobijete na našem pultu u prizemlju tržnog centra.</p>
                            <div></div>
                            <a href='https://www.google.com/maps/place/Gigatron+MEGASTORE+G9%2FG49+Stadion+SC+Beograd/@44.7748488,20.4903549,15z/data=!4m5!3m4!1s0x0:0x9c7917d8f495e1a6!8m2!3d44.7748488!4d20.4903549'
                            className='text-blue-800 cursor-pointer mt-5'>Gigatron Megastore G09/G49, Beograd</a>
                            </div>
                          
                        </div>

                        <div className='flex flex-col space-y-2 mt-16'>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Tesla televizora</button>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Tesla belu tehniku</button>
                        </div>
                        <p className='text-gray-400 text-sm mt-2'>*Trajanje promocije u prodavnicama: 1.11- 30.11.2022. od 10h do 22h.</p>

                    </div>
                </div>


                {/* drugi */}
                <div className="bg-white custom-height2 shadow-lg shadow-gray-400 py-3 px-3">
                    <div className='bg-gray-300 h-12 w-full'>
                        <div className='flex'>
                            <p>20% popusta na Gorenje belu tehniku i kućne aparate u SC Stadion – </p>
                            <h1 className='font-bold text-red-500 ml-2'>ISTEKLA PROMOCIJA</h1>

                        </div>
                        <div className='flex space-x-3 mt-5 mx-5'>
                            <img src={gigprom2} alt="" className='h-48 w-56 mt-10' />
                            <div className='space-y-5 text-sm'>
                            <p>Snižene cene Gorenje bele tehnike, kućnih i kuhinjskih aparata u našoj prodavnici u Stadion shopping centru.</p>
                            <p className='mb-5'>Iskoristite 20% popusta na Gorenje belu tehniku, male kućne i kuhinjske aparate, samo u prodavnicama G09 i G49. Više informacija o popustu možete da dobijete na našem pultu u prizemlju tržnog centra.</p>
                            <div></div>
                            <a href='https://www.google.com/maps/place/Gigatron+MEGASTORE+G9%2FG49+Stadion+SC+Beograd/@44.7748488,20.4903549,15z/data=!4m5!3m4!1s0x0:0x9c7917d8f495e1a6!8m2!3d44.7748488!4d20.4903549'
                            className='text-blue-800 cursor-pointer mt-5'>Gigatron Megastore G09/G49, Beograd</a>
                            </div>
                          
                        </div>

                        <div className='flex flex-col mt-12 space-y-2 '>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Gorenje bele tehnike</button>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Gorenje malih kućnih aparata </button>
                        </div>
                        <p className='text-gray-400 text-sm mt-2'>*Trajanje promocije u prodavnicama: 1.11- 30.11.2022. od 10h do 22h.</p>

                    </div>
                </div>

                {/* treci */}
                <div className="bg-white custom-height2 shadow-lg shadow-gray-400 py-3 px-3">
                    <div className='bg-gray-300 h-12 w-full'>
                        <div className='flex'>
                            <p>Rollman - Savršena lakoća peglanja – promocija u SC Stadion –</p>
                            <h1 className='font-bold text-red-500 ml-2'>ISTEKLA PROMOCIJA</h1>

                        </div>
                        <div className='flex space-x-3 mt-5 mx-5'>
                            <img src={masina} alt="" className='h-48 w-56 mt-10' />
                            <div className='space-y-5 text-sm'>
                            <p>Udobno smešteni u sedećem položaju, sada možete ispeglati i do 10 stvari u minuti. Brzo i lako, jer Rollman pegla veš umesto vas. Da peglanje bude uživanje!</p>
                            <p className='mb-5'>Promocija Rollman mašine za peglanje i prezentacija njenih funkcija u našoj prodavnici u SC Stadion.</p>
                            <div></div>
                            <a href='https://www.google.com/maps/place/Gigatron+MEGASTORE+G9%2FG49+Stadion+SC+Beograd/@44.7748488,20.4903549,15z/data=!4m5!3m4!1s0x0:0x9c7917d8f495e1a6!8m2!3d44.7748488!4d20.4903549'
                            className='text-blue-800 cursor-pointer mt-5'>Gigatron Megastore G09/G49, Beograd</a>
                            </div>
                          
                        </div>

                        <div className='flex flex-col space-y-2 mt-24'>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte Rollman mašinu za peglanje</button>
                            
                        </div>
                        <p className='text-gray-400 text-sm'>*Trajanje promocije u prodavnicama: 1.11- 30.11.2022. od 10h do 22h.</p>

                    </div>
                </div>

                {/* cetvrti */}
                <div className="bg-white custom-height2 shadow-lg shadow-gray-400 py-3 px-3">
                    <div className='bg-gray-300 h-12 w-full'>
                        <div className='flex'>
                            <p>Proleće u STOP SHOP-u Niš – promocija Farm kosilica i trimera –  </p>
                            <h1 className='font-bold text-red-500 ml-2'>ISTEKLA PROMOCIJA</h1>

                        </div>
                        <div className='flex space-x-3 mt-5 mx-5'>
                            <img src={kosilica} alt="" className='h-48 w-56 mt-10' />
                            <div className='space-y-5 text-sm'>
                            <p>Prilikom kupovine Farm kosilica i trimera 28. 5. 2022. u našoj radnji u STOP SHOP-u Niš, dobijate sledeće poklone:</p>
                            <p className='mb-5'>Uz kupovinu bilo koje Farm kosilice na poklon dobijate 4T ulje, fleksibilno crevo za baštu ili baštenski set alata; uz kupovinu bilo kog Farm trimera na poklon dobijate 2T ulje, zaštitne rukavice, majicu ili baštenski set alata.</p>
                            <div></div>
                            <a href='https://www.google.com/maps/place/Gigatron+prodavnica+G52+-+SC+Stop+Shop+Ni%C5%A1/@43.309559,21.9419965,13.63z/data=!4m5!3m4!1s0x4755b12777baebbd:0x61e9f83adfdabf8b!8m2!3d43.310651!4d21.9367418?rapsrc=lu_categorical_full_list&hl=en&authuser=0'
                            className='text-blue-800 cursor-pointer mt-5'>Gigatron prodavnica G52, Niš</a>
                            </div>
                          
                        </div>

                        <div className='flex flex-col mt-24 space-y-2'>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Tesla televizora</button>
                            <button className='rounded-lg border-2 border-solid border-gray-800 h-10 text-blue-600 font-semibold'>Pogledajte kompletnu ponudu Tesla belu tehniku</button>
                        </div>
                        <p className='text-gray-400 text-sm'>*Trajanje promocije u prodavnicama: 1.11- 30.11.2022. od 10h do 22h.</p>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default PromotionSection