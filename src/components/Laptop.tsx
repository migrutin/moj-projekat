import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import slika from '../img/apple.png'
import { useShoppingCart } from '../context/ShoppingCartContext';
import JedanLaptop from './JedanLaptop';

//Ova komponenta samo treba da ti primi niz i da ga renderuje

interface TipJedanLaptop{
  id:number, 
  imgUrl:string, 
  name:string,
   price:number
}

 interface TipPropsa{
  nizLaptopova:TipJedanLaptop[]
 }

 function Laptop({nizLaptopova}:TipPropsa){
  

  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Laptop računari</h1>
      </div>

      <div className='laptop'>
        <div className='laptop-item'>
          {nizLaptopova.map(jedanLaptop=>
          <JedanLaptop
           id={jedanLaptop.id} 
          imgUrl={jedanLaptop.imgUrl} 
          name={jedanLaptop.name} 
          price={jedanLaptop.price}
          key={jedanLaptop.id}
          />)}
        </div>
      </div>

    </div>
  )
}

export default Laptop
