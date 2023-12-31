import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import ProductsDropdown from './ProductsDropdown';
import SecondDropDown from './SecondDropDown';


const Underline = () => {
  const [firstDropDown, setfirstDropDown] = useState(false);
  const [secondDropDown, setsecondDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent){
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setfirstDropDown(false);
        setsecondDropDown(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='undreline-div flex'>
      <div className='flex space-x-2  ml-12 mr-56'>
        <div className='space-x-1 py-2' onClick={() => setfirstDropDown(!firstDropDown)}>
          <i className="fa-solid fa-bars"></i>
          <a className='undreline-text'>Proizvodi</a>
        </div>

        {firstDropDown && (
          <ProductsDropdown></ProductsDropdown>
        )}

        <div className='space-x-1 py-2' onClick={() => setsecondDropDown(!secondDropDown)}>
          <i className="fa-solid fa-heart"></i>
          <a className='undreline-text'>Pogodnosti</a>
        </div>

        {secondDropDown && (
          <SecondDropDown></SecondDropDown>
        )}
      </div>

      <div className='flex space-x-4 py-3 mr-72'>
        <Link to='/akcije' className='text-black cursor-pointer font-semibold'>Akcije</Link>
        <a href='https://gigatron.rs/prodavnice' className='text-black cursor-pointer'>Prodavnice</a>
        <Link to='/poslovanje' className='text-black cursor-pointer'>Poslovanje</Link>
        <Link to='/kontakt' className='text-black cursor-pointer'>Kontakt</Link>
        <Link to='/globaltel' className='text-black cursor-pointer'>Globaltel</Link>
      </div>
    </div>
  );
}

export default Underline;
