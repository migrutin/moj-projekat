import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import slika from '../img/apple.png'
import { useShoppingCart } from '../context/ShoppingCartContext';
import OneLaptop from './OneLaptop'

interface TypeOneLaptop{
  id: number;
  name:string;
  imgUrl: string;
  price: number; 

}

interface TypeProps{
  arrayLaptops: TypeOneLaptop[]
}



 function Laptop({arrayLaptops}:TypeProps){
  


  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Laptop računari</h1>
      </div>

      <div className='laptop'>
        <div className='laptop-item'>
         
        {arrayLaptops.map(oneLaptop=>
          <OneLaptop
           id={oneLaptop.id} 
          imgUrl={oneLaptop.imgUrl} 
          name={oneLaptop.name} 
          price={oneLaptop.price}
          key={oneLaptop.id}
          />)}

        </div>
      </div>

    </div>
  )
}

export default Laptop
