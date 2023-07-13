import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

interface OneDockerProps {
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}

function OneDocker({id, name, imgUrl, price}: OneDockerProps) {

    const {increaseQuantity, decreaseQuantity, remove, getItemQuantity} = useShoppingCart()
    const numberOfItems: number = getItemQuantity(id)



  return (
    <Link to='/dockers' className='link' key={id}>
    <img src={imgUrl} alt="ABRAKADABRA" className='laptop-item-img' />
    <h1 className='link-h'>{name}</h1>
    <div className='flex'>
      <p className='link-p'>{price} RSD</p>
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
            <button className='remove-button' onClick={()=>remove(id)}>remove</button>
          </div>
        </div>

      )}


    </div>
  </Link>
  )
}

export default OneDocker