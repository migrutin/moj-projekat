import React from 'react'
import klima from '../img/klima.png'
import { Link } from 'react-router-dom'

function Snizenje() {
    return (
        <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
            <div className='div-izdvajamo-iz-ponude flex flex-col'>

                <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
                <div className='linija'></div>
                <Link to='/akcije' key='link-akcije' className='linkovi'>Akcije</Link>
                <div className='linija'></div>
                <Link to='/novosti' key='link-novosti' className='linkovi'>Novosti</Link>
                <div className='linija'></div>
                <Link to='/gaming-korner' key='link-gamingKorner' className='linkovi'>Gaming korner</Link >
                <div className='linija'></div>
                <Link to='/promocije' key='link-promocije' className='linkovi'>Promocije</Link>
                <div className='linija'></div>
                <Link to='/promocije-u-prodavnici' key='link-promocijeProdavnice' className='linkovi'>Promocije u prodavnicama</Link>
                <div className='linija'></div>
            </div>



            <div className='akcija flex-col'>
                <h1 className='naslov'>Akcije</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='pretraga' />

                <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>
                    <a href='https://gigatron.rs/akcije?strana=2' className='kvadrat'>
                        <img src={klima} alt="" className='h-40' />
                        <p className='kvadrat-p'>Super ponuda klima uređaja - GREE</p>


                    </a>



                </div>
            </div>
        </div>
    )
}

export default Snizenje