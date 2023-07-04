import React from 'react'
import { Link } from 'react-router-dom'
import visa from '../img/visa.png'
import master from '../img/master.png'
import maestro from '../img/maestro.png'
import verified from '../img/verified.png'
import intesa from '../img/intesa.png'
import nlb from '../img/nlb.png'
import raiffeisen from '../img/raiffiesen.png'
import wspay from '../img/wspay.png'
import ips from '../img/ips.jpg'
import visasecure from '../img/visasecure.png'
import idcheck from '../img/idcheck.png'


function Footer() {
    return (
        <div className='bg-blue-950 flex-col h-28 w-full p-5 justify-center'>
            <div className='flex space-x-1 justify-between px-72 mb-5'>
                <Link to='https://rs.visa.com/'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={visa} alt="" className='h-10 w-10 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://www.mastercard.rs/sr-rs.html'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={master} alt="" className='h-8 w-10 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://www.mastercard.rs/sr-rs/korisnici/pronadite-karticu.html'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={maestro} alt="" className='h-8 w-10 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html'>
                <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                    <img src={verified} alt="" className='h-10 w-10 cursor-pointer' />
                </div>
                </Link>`
               
                <Link to='https://www.bancaintesa.rs/'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={intesa} alt="" className='h-10 w-10 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://www.nlbkb.rs/'><div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                    <img src={nlb} alt="" className='h-10 w-16 cursor-pointer' />
                </div>
                </Link>

                <Link to='https://www.raiffeisenbank.rs/'> <div className='bg-white h-8 w-20 rounded-lg flex items-center justify-center'>
                    <img src={raiffeisen} alt="" className='h-10 w-16 cursor-pointer' />
                </div>
                </Link>
            
                <Link to='https://www.wspay.rs/'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={wspay} alt="" className='h-8 w-12 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://rs.visa.com/'>
                    <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                        <img src={visasecure} alt="" className='h-8 w-10 cursor-pointer' />
                    </div>
                </Link>

                <Link to='https://www.mastercard.rs/sr-rs/korisnici/podrska/sigurnost-i-zastita/identity-check.html'> <div className='bg-white h-8 w-16 rounded-lg flex items-center justify-center'>
                    <img src={idcheck} alt="" className='h-10 w-10 cursor-pointer' />
                </div>
                </Link>



            </div>




            <div className="hidden text-gray-400 md:block text-center">
                Copyright © 2007-2023 Gigatron. Sva prava su zadržana. Developed by Gigatron
            </div>

        </div>
    )
}

export default Footer