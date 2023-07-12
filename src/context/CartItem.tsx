import React from 'react'
import { useShoppingCart } from './ShoppingCartContext'
import laptopsJson from '../data2/laptops.json'

type CartItemProps={
    id:number
    quantity: number
}

export default function CartItem({id, quantity}: CartItemProps) {
    const {remove} = useShoppingCart()
    const item = laptopsJson.laptops.find(i => i.id === id)
    if(item== null) return null

    return (
        <div>
            <div className='cart'>
                <img src={item.imgUrl} alt="" className='w-56 h-56' />
            </div>
        </div>
    )
 
}


 
 