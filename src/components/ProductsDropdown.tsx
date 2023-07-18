import { Link } from 'react-router-dom'

const ProductsDropdown = () => {
  return (
    <div className="flex z-50 products-dropdown"    >
      <div className="dropdown flex flex-col">
        <Link to="/portable-pc" className="dropdown-link">Laptop računari</Link>
        <Link to="/racunari" className="dropdown-link">Računari i komponente</Link>
        <Link to="/oprema" className="dropdown-link">Oprema za računare</Link>
        <Link to="/tv-audio-video" className="dropdown-link">Tv, audio i video</Link>
        <Link to="/mobilni-telefoni" className="dropdown-link">Mobilni telefoni i tableti</Link>
        <Link to="/klima-uredjaji" className="dropdown-link">Klima uređaji</Link>
        <Link to="/mali-kucni-aparati" className="dropdown-link">Mali kućni aparati</Link>
        <Link to="/mali-kuhinjski-aparati" className="dropdown-link">Mali kuhinjski aparati</Link>
        
      </div>
    </div>
  )
}

export default ProductsDropdown
