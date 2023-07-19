import React from 'react'
import { Link } from 'react-router-dom'

const SecondDropDown = () => {
  return (
    <div className="fixed products-dropdown z-50"    >
      <div className="dropdown-s flex flex-col ml-24">
        <Link to="/nacin-placanja" className="dropdown-link">Način plaćanja</Link>
        <Link to="/bonus" className="dropdown-link">Loyalty program</Link>
        <Link to="/bela-tehnika" className="dropdown-link">Giga preporuka bele tehnike</Link>
        <Link to="/bela-tehnika" className="dropdown-link">Giga preporuka malih kućnih aparata</Link>
        <Link to="/montaza-televizora" className="dropdown-link">Uslužna montaža televizora</Link>
        <Link to="/ugradnja-klima" className="dropdown-link">Ugradnja klime</Link>
        <Link to="/akcije" className="dropdown-link">Akcije</Link>
        <Link to="/mali-kuhinjski-aparati" className="dropdown-link">Mali kuhinjski aparati</Link>
        
      </div>
    </div>
  )
}

export default SecondDropDown
