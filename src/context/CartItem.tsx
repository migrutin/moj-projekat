import React from 'react'
import { useShoppingCart } from './ShoppingCartContext'
import laptopsJson from '../database.json'
import { Link } from 'react-router-dom'

type CartItemProps={
    id:number
    quantity: number
}

export default function CartItem({id, quantity}: CartItemProps) {
    const {remove} = useShoppingCart()
    const item = laptopsJson.laptops.find(i => i.id === id)
    if(item== null) return null

    return (
        <div className='flex bg-gray-100'>
            <div className='cart'>
                <img src={item.imgUrl} alt="" className='w-56 h-56' />
            </div>
            

            <div className='shopping-cart-text'>
                <h1 className='cart-name'>{item.name} {quantity > 1 && <div className='text-gray-700 my-2'>x{quantity}</div>}</h1>
                <p className='cart-price'>{item.price}</p>
               <div></div>
            </div>

            <button className='remove' onClick={() => remove(item.id)}>X </button>

            <div className='div-cart-2'>
                <div className='flex flex-ol'>
                    <h1>Iznos kupovine je: </h1> 
                    <div className='flex total'>{item.price*quantity}</div></div>
                <div className='cart-link'>
                    <Link to='/registracija' className='underline'>Napravite novi nalog ili se ulogujte</Link>
                </div>

                <button className='cart-button'>Nastavite</button>
            </div>
        </div>
    )
 
}


 
 