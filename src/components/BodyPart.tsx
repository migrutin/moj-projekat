import React from 'react'

function BodyPart() {
    return (
        <div className='bg-gray-100 max-w-full h-screen'>
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



        </div>
    )
}

export default BodyPart