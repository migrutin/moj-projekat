import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

interface OneDockerProps {
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}

function OneDocker(docker: OneDockerProps) {

    const {increaseQuantity, decreaseQuantity, remove, getItemQuantity} = useShoppingCart()
    const numberOfItems: number = getItemQuantity(docker.id)



  return (
    <Link to='/dockers' className='link' key={docker.id}>
    <img src={docker.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{docker.name}</h1>
    <div className='flex'>
      <p className='link-p'>{docker.price} RSD</p>
      {(numberOfItems) === 0 ? (
        <i className="fa fa-shopping-cart fa-2xl link-i" onClick={() =>increaseQuantity(docker)} aria-hidden="true"></i>
      ) : (
        <div className='link-i flex-col'>
          <div className='flex'>
          <button className='quantity-buttons' onClick={() =>decreaseQuantity(docker.id)}> - </button>
          <div className='quantity'>{numberOfItems}</div>
          <button className='quantity-buttons'onClick={() =>increaseQuantity(docker)} > + </button>
          </div>

          <div>
            <button className='remove-button' onClick={()=>remove(docker.id)}>remove</button>
          </div>
        </div>

      )}


    </div>
  </Link>
  )
}

export default OneDocker