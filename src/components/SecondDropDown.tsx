import React from 'react'
import { Link } from 'react-router-dom'

const SecondDropDown = () => {
  return (
    <div className="fixed inset-5 flex mt-44 pl-36 justify-normal z-50"    >
      <div className="dropdown flex flex-col">
        <Link to="/portable-pc" className="dropdown-link">Način plaćanja</Link>
        <Link to="/akcije" className="dropdown-link">Isporuka</Link>
        <Link to="/akcije" className="dropdown-link">Loyaly program</Link>
        <Link to="/akcije" className="dropdown-link">Giga preporuka bele tehnike</Link>
        <Link to="/akcije" className="dropdown-link">Giga preporuka malih kućnih aparata</Link>
        <Link to="/akcije" className="dropdown-link">Uslužna montaža televizora</Link>
        <Link to="/akcije" className="dropdown-link">Ugradnja klime</Link>
        <Link to="/akcije" className="dropdown-link">Pogodnosti za pravna lica</Link>
        <Link to="/akcije" className="dropdown-link">Mali kuhinjski aparati</Link>
        
      </div>
    </div>
  )
}

export default SecondDropDown
