import React from 'react'
import { useShoppingCart } from './ShoppingCartContext'
import laptopsJson from '../database.json'
import { Link } from 'react-router-dom'

type CartItemProps={
    id:number,
    imgUrl:string,
    name:string,
    price:number,
    quantity: number
}

export default function CartItem(item: CartItemProps) {
    const {remove} = useShoppingCart()
    //Ovo ne sme da postoji nikako
    // const item = laptopsJson.laptops.find(i => i.id === id)
    // if(item== null) return null

    // evo ti link kako da sredis slike: https://stackoverflow.com/questions/73361987/how-to-use-an-image-from-a-path-in-react-typescript-without-import-or-require
    return (
        <div className='flex bg-gray-100'>
            <div className='cart'>
                <img src={item.imgUrl} alt="" className='w-56 h-56' />
            </div>
            

            <div className='shopping-cart-text'>
                <h1 className='cart-name'>{item.name} {item.quantity > 1 && <div className='text-gray-700 my-2'>x{item.quantity}</div>}</h1>
                <p className='cart-price'>{item.price}</p>
               <div></div>
            </div>

            <button className='remove' onClick={() => remove(item.id)}>X </button>

            <div className='div-cart-2'>
                <div className='flex flex-ol'>
                    <h1>Iznos kupovine je: </h1> 
                    <div className='flex total'>{item.price*item.quantity}</div></div>
                <div className='cart-link'>
                    <Link to='/registracija' className='underline'>Napravite novi nalog ili se ulogujte</Link>
                </div>

                <button className='cart-button'>Nastavite</button>
            </div>
        </div>
    )
 
}


 
 