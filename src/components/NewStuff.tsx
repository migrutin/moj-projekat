import React from 'react'
import philips from '../img/philips.jpg'
import { Link } from 'react-router-dom'

function NewStuff() {
  
         return (
        <div className='sm:w-full sm:h-200vh sm:flex bg-gray-100 py-10 px-52'>
            <div className='bg-white w-48 h-72 px-2 flex flex-col'>
                <h1 className='text-xl underline my-5'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>


                {/* UBACITI LINKOVE */}
                <Link to='/app' className='mt-2 mb-1 cursor-pointer hover:underline'>Novosti</Link>
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='' className='mt-2 mb-1 cursor-pointer hover:underline'>Gaming korner</Link >
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='' className='mt-2 mb-1 cursor-pointer hover:underline'>Promocije</Link>
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='' className='mt-2 mb-1 cursor-pointer hover:underline'>Promocije u prodavnicama</Link>
                <div className='w-36 h-px bg-gray-200'></div>
            </div>


            <div className='bg-transparent h-screen w-full mx-5 flex-col'>
                <h1 className='text-2xl underline'>Novosti</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='w-full h-10 border-solid border-2 mt-5 px-2 py-2' />

                <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={philips} alt="" className='h-40'/>
                        <p className='text-gray-500 mt-3'>Philips slušalice po sniženoj ceni</p>

                         
                    </a>
                    
                    

                </div>
            </div>
        </div>
    )
  
}

export default NewStuff