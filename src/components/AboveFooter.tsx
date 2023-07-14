import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import face from '../img/face.png'
import insta from '../img/insta.png'
import linkedin from '../img/linkedin.png'
import yt from '../img/yt.jpg'



const AboveFooter = () =>{
    return (
        <div className='bg-sky-900 custom-height w-full px-48 py-2 flex-col space-y-1'>

            {/* PRVI DEO */}
            <div className=' flex w-full h-32 mt-1'>
                <div className=' w-56 '>
                    <img src={logo} alt="" className='h-28 w-40 my-2' />
                </div>


                <div className='  flex space-x-5'>
                    <h1 className='font-bold  mt-10 text-white'>ISPORUKA</h1>
                    <div className=' bg-white h-10 w-px mt-10'></div>
                    <h1 className='font-bold  mt-10 text-white'>GIGATRON KARTICA</h1>
                    <div className='bg-white h-10 w-px mt-10'></div>
                    <h1 className='font-bold  mt-10 text-white'>ŠOK CENE I PROMOCIJE</h1>
                </div>

                {/* DRUSTVENE MREZE */}
                <div className='w-1/3 pt-8 flex justify-end space-x-2'>
                    <a href='https://www.facebook.com/GigatronRS/?locale=sr_RS' className='rounded-full h-8 w-8  border-solid border-2 border-white '>
                        <img src={face} alt="" />
                    </a>
                    <a href='https://www.instagram.com/gigatron.rs/' className='rounded-full h-8 w-8  border-solid border-2 border-white '>
                        <img src={insta} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/company/gigatron/?originalSubdomain=rs' className='rounded-full h-8 w-8  border-solid border-2 border-white '>
                        <img src={linkedin} alt="" />
                    </a>
                    <a href='https://www.youtube.com/user/GigatronChannel' className='rounded-full h-8 w-8  border-solid border-2 border-white '>
                        <img src={yt} alt="" />
                    </a>
                </div>
            </div>




            {/* LINIJA */}
            <div className='bg-gray-200  w-full h-px'></div>




            <div className=' flex flex-1 space-x-2 w-full h-72 py-5'>
                <div className='w-1/6 space-y-3 '>
                    <h1 className='font-bold text-white'>KORISNIČKI NALOG</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Već ste registrovani? Ulogujte se sada</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Zaboravljena lozinka</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Registracija</h2></Link>
                </div>




                <div className=' w-1/6 space-y-3'>
                    <h1 className='font-bold text-white'>PRODAJA</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Akcije</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Novosti</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Gaming korner</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Registracija poklona</h2></Link>
                </div>


                <div className=' w-1/6 space-y-3 '>
                    <h1 className='font-bold text-white'>KOMPANIJA GIGATRON</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>O kompaniji</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Društveno odgovorno poslovanje</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Posao u Gigatronu</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Zakupljujemo lokale</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Company profile</h2></Link>
                </div>


                <div className=' w-1/6 space-y-3'>
                    <h1 className='font-bold text-white'>KUPOVINA</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Gigtraon loyalty kartica</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Uslovi korišćenja</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Politika privatnosti</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Detalji ugovora o prodaji</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Obaveštenje o pravima i obavezama potrošača</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Reklamacije</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Prodavnice</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Osiguranje uređaja</h2></Link>
                </div>



                <div className=' w-1/6 space-y-3'>
                    <h1 className='font-bold text-white'>POTREBNA VAM JE POMOĆ?</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Kontakt</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Kako kupovati na gigatron.rs</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Česta pitanja</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Šta su gigatron bodovi</h2></Link>
                </div>


                <div className=' w-1/6 space-y-3'>
                    <h1 className='font-bold text-white'>PLAĆANJE I ISPORUKA</h1>

                    {/* PROMENITI LINK!!!!!!!!!!!!! */}
                    <Link to='/App.tsx'> <h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Način plaćanja </h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>Isporuka</h2></Link>
                    <Link to='/App.tsx'><h2 className='text-gray-300 hover:text-gray-500 cursor-pointer'>TAX FREE i Ambasade</h2></Link>
                </div>


            </div>



        </div>
    )
}

export default AboveFooter