import React from 'react'
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

type OneBagProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneBag = (bag : OneBagProps) => {
    const {increaseQuantity, decreaseQuantity, remove, getItemQuantity} = useShoppingCart()
    const numberOfItems: number = getItemQuantity(bag.id)
  return (
    <Link to='/bags' className='link' key={bag.id}>
    <img src={bag.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{bag.name}</h1>
    <div className='flex'>
      <p className='link-p'>{bag.price} RSD</p>
      {(numberOfItems) === 0 ? (
        <i className="fa fa-shopping-cart fa-2xl link-i" onClick={() =>increaseQuantity(bag)} aria-hidden="true"></i>
      ) : (
        <div className='link-i flex-col'>
          <div className='flex'>
          <button className='quantity-buttons' onClick={() =>decreaseQuantity(bag.id)}> - </button>
          <div className='quantity'>{numberOfItems}</div>
          <button className='quantity-buttons'onClick={() =>increaseQuantity(bag)} > + </button>
          </div>

          <div>
            <button className='remove-button' onClick={()=>remove(bag.id)}>remove</button>
          </div>
        </div>

      )}


    </div>
  </Link>
  )
}

export default OneBag