
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
            <div className="header-1 lg:visible py-2">
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
            <div className="flex flex-col items-end w-1/3  py-2 px-2 space-y-2">
                
                <Link to='/login' ><i className="fa-regular fa-user text-white fa-xl"></i></Link>

                <Link to='/korpa'> <i className="fa fa-shopping-cart text-white fa-xl"></i></Link>
                        {/* {totalNumberItems >  0 && (
                             <div className='rounded-full bg-yellow-400
                        h-5 w-5 flex justify-center align-middle absolute -mt-7 -ml-3'>
                            {totalNumberItems}
                        </div>)} */}
                       
                
            </div>
            <div></div>

        

        </header >
    )
}

export default Header