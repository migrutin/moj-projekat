
import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import 'alpinejs'
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';




const Header = () => {
    const [dropDown, setDropDown] = useState(false)

    const { totalNumberItems } = useShoppingCart()

    return (

        <header className='header flex top-0'>
            <div className="header-1 w-1/3 lg:visible py-2">
                <div onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}
                    className="cursor-pointer">
                    <div className='space-x-2'>
                        <i className="fa fa-phone text-white" ></i>
                        <span className='text-contact lg:visible'>Pozovite nas</span>

                        {dropDown && (
                            <div className=" dropdown-contact ">
                                <div className="py-2">
                                    <div className="px-4 py-2">
                                        <h2>Fizička lica</h2>
                                        <p>011 44 14 000</p>
                                    </div>
                                    <div className="px-4 py-2">
                                        <h2>Pravna lica</h2>
                                        <p>011 44 14 010</p>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className=''>
                    <i className="fas fa-envelope text-white" ></i>
                    <span className='ml-2 text-white '>prodaja@gigatronshop.com</span>
                </div>
            </div>


            <div className="flex w-1/3 items-center justify-center ">

                <Link to='/'><img src={logo} alt="Logo" className='sm:h-64 sm:w-full my-2' /></Link>



            </div>
            <div className="flex justify-end mt-5 space-x-3 w-1/3 ">
                
                <Link to='/login' ><i className="fa-regular fa-user text-white fa-xl"></i></Link>

                <Link to='/korpa'> <i className="fa fa-shopping-cart text-white  fa-xl">
                        
                        {totalNumberItems > 0 && (<div className='yellow-circle flex -mt-7 -ml-3'> {totalNumberItems} </div>)}
                    
                    </i>
                    </Link>
                       
                
            </div>
            <div></div>

        

        </header >
    )
}

export default Header