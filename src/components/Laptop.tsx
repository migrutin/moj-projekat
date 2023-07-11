import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import slika from '../img/apple.png'
import { useShoppingCart } from '../context/ShoppingCartContext';


interface LaptopProps {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}
interface LaptopData {
  laptops: LaptopProps[];
}

const data: LaptopData = require('../data2/laptops.json');

 function Laptop({id, name, imgUrl, price} : LaptopProps){
  
  const {increaseQuantity, getItemQuantity, decreaseQuantity, remove} = useShoppingCart()

  const numberOfItems:number = getItemQuantity(id)

  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Laptop računari</h1>
      </div>

      <div className='laptop'>
        <div className='laptop-item'>
          {data.laptops.map((laptop: { id: number, name: string, imgUrl: string, price: number }) => (
            <Link to='/laptops' className='link' key={laptop.id}>
              <img src={laptop.imgUrl} alt="" className='laptop-item-img' />
              <h1 className='link-h'>{laptop.name}</h1>
              <div className='flex'>
                <p className='link-p'>{laptop.price} RSD</p>
                {(numberOfItems) === 0 ? (
                  <i className="fa fa-shopping-cart fa-2xl link-i" onClick={() =>increaseQuantity(id)} aria-hidden="true"></i>
                ) : (
                  <div className='link-i flex-col'>
                    <div className='flex'>
                    <button className='quantity-buttons' onClick={() =>decreaseQuantity(id)}> - </button>
                    <div className='quantity'>{numberOfItems}</div>
                    <button className='quantity-buttons'onClick={() =>increaseQuantity(id)} > + </button>
                    </div>
                    
                    <div>
                      <button className='remove-button'>remove</button>
                    </div>
                  </div>
                  
                )}


              </div>
            </Link>
          ))}






        </div>
      </div>

    </div>
  )
}

export default Laptop
