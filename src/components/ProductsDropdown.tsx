import React from 'react'
import { Link } from 'react-router-dom'

const ProductsDropdown = () => {
  return (
    <div className="fixed inset-5 flex mt-44 pl-36 justify-normal z-50"    >
      <div className="dropdown flex flex-col">
        <Link to="/portable-pc" className="dropdown-link">Laptop računari</Link>
        <Link to="/akcije" className="dropdown-link">Računari i komponente</Link>
        <Link to="/akcije" className="dropdown-link">Oprema za računare</Link>
        <Link to="/akcije" className="dropdown-link">Gaming</Link>
        <Link to="/akcije" className="dropdown-link">Tv, audio i video</Link>
        <Link to="/akcije" className="dropdown-link">Mobilni telefoni i tableti</Link>
        <Link to="/akcije" className="dropdown-link">Klima uređaji</Link>
        <Link to="/akcije" className="dropdown-link">Mali kućni aparati</Link>
        <Link to="/akcije" className="dropdown-link">Mali kuhinjski aparati</Link>
        
      </div>
    </div>
  )
}

export default ProductsDropdown
