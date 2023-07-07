import React from 'react'
import laptop from '../img/laptop.jpg'
import { Link } from 'react-router-dom'

function GKorner() {
    return (
        <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
            <div className='div-izdvajamo-iz-ponude flex flex-col'>

            <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>
                <Link to='/akcije' key='link-akcije' className='linkovi'>Akcije</Link>
                <div className='linija'></div>
                <Link to='/novosti' className='linkovi'>Novosti</Link>
                <div className='linija'></div>
                <Link to='/gaming-korner' className='linkovi'>Gaming korner</Link >
                <div className='linija'></div>
                <Link to='/promocije' className='linkovi'>Promocije</Link>
                <div className='linija'></div>
                <Link to='/promocije-u-prodavnicama' className='linkovi'>Promocije u prodavnicama</Link>
                <div className='linija'></div>
            </div>


            <div className='akcija flex-col'>
                <h1 className='naslov'>Gaming korner</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='pretraga' />

                <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={laptop} alt="" className='h-40' />
                        <p className='kvadrat-p'>Najbolji gaming laptop računari</p>


                    </a>



                </div>
            </div>
        </div>
    )
}

export default GKorner