import React from 'react'

function Newsletter() {
  return (
    <div className='bg-transparent flex h-24 w-full '>
        <div className='py-5 pl-44 space-y-2'>
            <h1 className='text-black font-bold text-2xl '>Prijavite se na naš newsletter</h1>
            <h3 className='text-gray-500'>Ne propustite naše najveće popuste i akcije.</h3>
        </div>
        <div>
        <input type="text" id="searchEmail" placeholder="Vaša email adresa"
                    className="ml-44 h-12 w-96 mt-7 px-4 py-1  border border-gray-300 rounded-full"></input>
                    <button className='bg-yellow-500 h-10 w-24 rounded-full'>Prijavite se</button>
        </div>
    </div>
  )
}

export default Newsletter