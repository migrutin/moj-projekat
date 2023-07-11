
import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import 'alpinejs'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';




function Header() {
    const [dropDown, setDropDown] = useState(false)

    return (

        <header className="bg-blue-950 text-base sticky z-50 top-0 ">
            <nav className="text-base flex justify-between items-center px-4 lg:mx-44 ">


                {/* prvi red u Headeru */}
                <div className=" flex h-10 mb-0">

                    <div onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}
                        className="flexitems-center space-x-2 cursor-pointer mr-3">
                        <div className='sm:invisible lg:visible space-x-2 '>
                            <i className="fa fa-phone text-white" ></i>
                            <span className=' text-white'>Pozovite nas</span>


                            {dropDown && (
                                <div className="absolute top-5 left-44
                                        mt-8 w-48 bg-white border border-gray-300 rounded-md shadow-lg ">
                                    <ul className="py-2">
                                        <li className="px-4 py-2">
                                            <h2>Fizička lica</h2>
                                            <p>011 44 14 000</p>
                                        </li>
                                        <li className="px-4 py-2">
                                            <h2>Pravna lica</h2>
                                            <p>011 44 14 010</p>
                                        </li>

                                    </ul>
                                </div>

                            )}

                        </div>
                    </div>
                    <div className=' mt-0 h-8 w-64 cursor-pointer'>
                        <i className="fas fa-envelope text-white" ></i>
                        <span className='ml-2 text-white invisible lg:visible '>prodaja@gigatronshop.com</span>
                    </div>
                </div>


                <div className="flex h-8 pb-5">

                    <div className="flex items-center space-x-2 cursor-pointer mr-3 mt-1">
                        <i className="fas fa-box text-white"></i>
                        <span className='text-white invisible lg:visible'>Status porudžbine</span>
                    </div>

                    <div className="flex items-center space-x-2 cursor-pointer mt-1">
                        <i className="fa-regular fa-heart text-white" ></i>
                        <span className='text-white invisible lg:visible'>Lista želja</span>
                    </div>
                </div>
            </nav>





            {/* Drugi red u Headeru */}
            <div className='flex mt-0 '>
                <div className=" invisible md:visible flex justify-between items-center h-24 px-4 ml-44 mr-5 my-0">
                    <Link to='/'><img src={logo} alt="Logo" className='h-28 w-40 my-2' /></Link>

                </div>

                <input type="text" id="searchField" placeholder="Unesite pojam za pretragu"
                    className="ml-0 h-10 w-1/2 mt-7 px-4 py-1  border border-gray-300 rounded-full"></input>

                <div className="flex items-center space-x-2 cursor-pointer mr-3 mt-1 ml-4">
                    <i className="fa-regular fa-user text-white"></i>
                    <Link to='/login' className='text-white invisible lg:visible'>Prijava</Link>
                </div>

                <button className="flex items-center space-x-2 cursor-pointer mr-3 mt-1 ml-4 relative">
                    <i className="fa fa-shopping-cart text-white">
                        <div className='rounded-full bg-yellow-400
                        h-5 w-5 flex justify-center align-middle absolute -mt-7 -ml-3'>
                            
                        </div>
                    </i>
                    <span className='text-white invisible lg:visible'>Korpa</span>
                </button>



            </div>


        </header>
    )
}

export default Header