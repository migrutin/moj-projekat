import React from 'react'
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

type OneMouseProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneMouse = (mouse : OneMouseProps) => {
    const {increaseQuantity, decreaseQuantity, remove, getItemQuantity} = useShoppingCart()
    const numberOfItems: number = getItemQuantity(mouse.id)

    console.log(numberOfItems)
  return (
    <Link to='/mice' className='link' key={mouse.id}>
    <img src={mouse.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{mouse.name}</h1>
    <div className='flex'>
      <p className='link-p'>{mouse.price} RSD</p>
      {(numberOfItems) === 0 ? (
        <i className="fa fa-shopping-cart fa-2xl link-i" onClick={() =>increaseQuantity(mouse)} aria-hidden="true"></i>
      ) : (
        <div className='link-i flex-col'>
          <div className='flex'>
          <button className='quantity-buttons' onClick={() =>decreaseQuantity(mouse.id)}> - </button>
          <div className='quantity'>{numberOfItems}</div>
          <button className='quantity-buttons'onClick={() =>increaseQuantity(mouse)} > + </button>
          </div>

          <div>
            <button className='remove-button' onClick={()=>remove(mouse.id)}>remove</button>
          </div>
        </div>

      )}


    </div>
  </Link>
  )
}

export default OneMouse