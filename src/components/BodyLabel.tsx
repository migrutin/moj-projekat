import React from 'react'
import { Link } from 'react-router-dom'

function BodyLabel() {
  return (
    <div className='bg-white rounded-lg h-28 w-3/4 mt-10 ml-44 
    pt-auto flex  justify-between px-10 py-2'>


        <div className="h-24 w-1/4 justify-between flex items-center">
            <i className="fas fa-tag fa-2xl"></i>
            <div className="flex flex-col ml-4">
                <h2 className="font-semibold">Najnovije akcije</h2>
                <Link to='/akcije' className="underline ml-2">Saznajte više</Link>
            </div>
            <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

        </div>

        <div className=" h-24 w-1/4 justify-between flex items-center ">
            <i className="fa-solid fa-database fa-2xl"></i>
            <div className="flex flex-col ml-4">
                <h2 className="font-semibold">Osvojite popuste</h2>
                <Link to='/bonus' className="underline  ml-2">Saznajte više</Link>
            </div>
            <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

        </div>

        <div className="h-24 w-1/4 justify-between flex items-center ">
            <i className="fa-solid fa-money-check-dollar fa-2xl"></i>
            <div className="flex flex-col ml-4 ">
                <h2 className="font-semibold ">Kupovina na rate</h2>
                <Link to ='' className="underline ml-2">Saznajte više</Link>
            </div>
            <div className="w-0.5 h-1/2 bg-gray-200 mx-4 mt-2"></div>

        </div>

        <div className="h-24 w-1/4 justify-between flex items-center  ">
            <i className="fa-solid fa-truck fa-2xl"></i>
            <div className="flex flex-col mr-2">
                <h2 className="font-semibold ml-2">Isporuka</h2>
                <Link to='' className="underline ml-2">Saznajte više</Link>
            </div>
            <div className="w-0.5 h-1/2 bg-transparent mx-4 mt-2"></div>


        </div>

        </div>

  )
}

export default BodyLabel