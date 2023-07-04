import React from 'react'
import { Link } from 'react-router-dom'
import logomajstor from '../img/logomajstor.png';
import majstor from '../img/majstor.png'
import glob from '../img/glob.png'

function BodyPart() {


    return (
        <div className='bg-gray-100 max-w-full h-full px-16'>
            <div className='flex bg-transparent h-96 w-3/4 ml-44 space-x-6 pt-10    '>
                <div className="relative bg-green-200 w-3/4 rounded-lg z-10">
                    <button className="absolute bottom-2 right-2 rounded-full
                             font-semibold bg-gray-100 h-8 w-32 hover:bg-gray-200">
                        Saznajte više
                    </button>

                    <div className='flex-col space-x-10'>
                        <button className="absolute rounded-full bottom-2 left-2
                             font-semibold bg-gray-100 h-8 w-8 hover:bg-gray-200">

                        </button>
                        <button className="absolute rounded-full bottom-2 left-1
                             font-semibold bg-gray-100 h-8 w-8 hover:bg-gray-200">

                        </button>
                    </div>

                </div>


                <div className='bg-blue-200 h-88 w-1/3 rounded-lg relative'>
                    <button className="absolute rounded-full top-36 left-3
                             font-semibold bg-gray-900 h-8 w-8 hover:bg-gray-200">

                    </button>

                    <button className="absolute rounded-full top-36 right-3
                             font-semibold bg-gray-900 h-8 w-8 hover:bg-gray-200">

                    </button>
                </div>


            </div>


            {/* Akicije, popusti, isporuka - section */}

            <div className='bg-white rounded-lg h-28 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between px-10 py-2'>


                <div className="h-24 w-1/4 justify-between flex items-center">
                    <i className="fas fa-tag fa-2xl"></i>
                    <div className="flex flex-col ml-4">
                        <h2 className="font-semibold">Najnovije akcije</h2>
                        <a href="https://gigatron.rs/akcije" className="underline ml-2">Saznajte više</a>
                    </div>
                    <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

                </div>

                <div className=" h-24 w-1/4 justify-between flex items-center ">
                    <i className="fa-solid fa-database fa-2xl"></i>
                    <div className="flex flex-col ml-4">
                        <h2 className="font-semibold">Osvojite popuste</h2>
                        <a href="https://gigatron.rs/akcije" className="underline  ml-2">Saznajte više</a>
                    </div>
                    <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

                </div>

                <div className="h-24 w-1/4 justify-between flex items-center ">
                    <i className="fa-solid fa-money-check-dollar fa-2xl"></i>
                    <div className="flex flex-col ml-4 ">
                        <h2 className="font-semibold ">Kupovina na rate</h2>
                        <a href="https://gigatron.rs/akcije" className="underline ml-2">Saznajte više</a>
                    </div>
                    <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

                </div>

                <div className="h-24 w-1/4 justify-between flex items-center  ">
                    <i className="fa-solid fa-truck fa-2xl"></i>
                    <div className="flex flex-col mr-2">
                        <h2 className="font-semibold ml-2">Isporuka</h2>
                        <a href="https://gigatron.rs/akcije" className="underline ml-2">Saznajte više</a>
                    </div>
                    <div className="w-0.5 h-1/2 bg-transparent mx-4 mt-2"></div>


                </div>




            </div>


            {/* Najtrazeniji proizvodi */}
            <div className='bg-transparent rounded-lg h-56 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between flex-col '>

                <h1 className='font-bold text-2xl pb-5'>Najtraženiji proizvodi</h1>
                <div className="container bg-white rounded-lg h-52 w-full"></div>

            </div>

            {/* Specijalni popusti i akcije */}


            <h1 className='font-bold text-2xl ml-44 mt-10'>Specijalni popusti i akcije</h1>
            <div className="grid grid-cols-3 gap-4 w-3/4 ml-44 my-10 space-x-4">
                <div className="rounded-lg h-96 bg-red-200">01</div>
                <div className="flex flex-col space-y-4">
                    <div className="rounded-lg h-48 bg-blue-200">02</div>
                    <div className="rounded-lg h-44 bg-green-200">03</div>
                </div>
                <div className="rounded-lg h-96 bg-purple-200">04</div>
            </div>





            {/* Preporucujemo za Vas */}

            <div>
                <h1 className='font-bold text-2xl ml-44'>Preporučujemo za Vas</h1>
                <div className='bg-transparent rounded-lg h-full w-3/4 mt-10 ml-44 
            pt-auto flex py-2 space-x-3'>


                    <div className="bg-yellow-200 rounded-lg h-96 w-1/4 justify-between flex items-center">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">1</h2>

                        </div>


                    </div>

                    <div className="bg-blue-200 rounded-lg h-96 w-1/4 justify-between flex items-center ">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">2</h2>

                        </div>


                    </div>

                    <div className="bg-green-200 rounded-lg h-96 w-1/4 justify-between flex items-center ">

                        <div className="flex flex-col ml-4 ">
                            <h2 className="font-semibold ">3</h2>

                        </div>


                    </div>

                    <div className="bg-purple-200 rounded-lg h-96 w-1/4 justify-between flex items-center  ">
                        <div className="flex flex-col mr-2">
                            <h2 className="font-semibold ml-2">4</h2>

                        </div>



                    </div>




                </div>
            </div>


            {/* Usluzna montaza */}
            {/*  !!!!!!!!!!OVDE UNETI LINK KA DRUGOJ STRANICI!!!!!!!!! */}
            <Link to="/App.tsx">
                <div className='bg-blue-900 rounded-lg h-24 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={logomajstor} alt="" className='h-32 w-32 ' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>USLUŽNA MONTAŽA</h1>
                        <p className='font-bold text-2xl text-white'>televizora i samostojeće bele tehnike</p>
                    </div>
                    <img src={majstor} alt="majstor" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>

            <Link to="/App.tsx">
                <div className='bg-purple-950 rounded-lg h-24 w-3/4 mt-32 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={glob} alt="" className='h-20 w-32 ml-2 mt-1' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>Globaltel POSTPAID paketi uz telefone</h1>
                        <p className='font-bold text-2xl text-white'>u svim Gigatron prodavnicama!</p>
                    </div>
                    <img src={majstor} alt="" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>
        












        </div>
    )
}

export default BodyPart