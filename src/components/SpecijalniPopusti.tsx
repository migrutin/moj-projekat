import React from 'react'

const SpecijalniPopusti =() =>{
  return (
    <div>
         <h1 className='font-bold text-2xl ml-44 mt-10'>Specijalni popusti i akcije</h1>
            <div className="grid grid-cols-3 gap-4 w-3/4 ml-44 my-10 space-x-4">
                <div className="rounded-lg h-96 bg-red-200"></div>
                <div className="flex flex-col space-y-4">
                    <div className="rounded-lg h-48 bg-blue-200"></div>
                    <div className="rounded-lg h-44 bg-green-200"></div>
                </div>
                <div className="rounded-lg h-96 bg-purple-200"></div>
            </div>
    </div>
  )
}

export default SpecijalniPopusti