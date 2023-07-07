import React from 'react'
import klima from '../img/klima.png'
import { Link } from 'react-router-dom'

function Snizenje() {
    return (
        <div className='sm:w-full sm:h-200vh sm:flex bg-gray-100 py-10 px-52'>
            <div className='bg-white w-48 h-72 px-2 flex flex-col'>
                <h1 className='text-xl underline my-2'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>
                <Link to='/novosti' key='link-novosti' className='linkovi'>Novosti</Link>
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='' key='link-gamingKorner' className='linkovi'>Gaming korner</Link >
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='promocije' key='link-promocije' className='linkovi'>Promocije</Link>
                <div className='w-36 h-px bg-gray-200'></div>
                <Link to='promocije-u-prodavnici' key='link-promocijeProdavnice' className='linkovi'>Promocije u prodavnicama</Link>
                <div className='w-36 h-px bg-gray-200'></div>

            </div>


            <div className='bg-transparent h-screen w-full mx-5 flex-col'>
                <h1 className='text-2xl underline'>Akcije</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='w-full h-10 border-solid border-2 mt-5 px-2 py-2' />

                <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='bg-white h-72 w-72 border-r-gray-600 cursor-pointer py-3 px-3
                    shadow-lg hover:shadow-lg'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='text-gray-500 mt-3'>Super ponuda klima uređaja - GREE</p>


                    </a>



                </div>
            </div>
        </div>
    )
}

export default Snizenje