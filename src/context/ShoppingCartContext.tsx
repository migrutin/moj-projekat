import React, { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import useLocalStorage from '../hooks/useLocalStorage'
type ShoppingCartContext = {

    getItemQuantity: (id: number) => number
    increaseQuantity: (item:Item) => void
    decreaseQuantity: (id: number) => void
    remove: (id: number) => void
    totalNumberItems: number
    cartItems: CartItem[]

}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type Item={
    id:number,
    name:string,
    imgUrl:string,
    price:number,
}

type CartItem = Item & {quantity:number}

const ShoppingCartContext = createContext({} as ShoppingCartContext)



export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])


    const totalNumberItems = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )


    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0

    }
    
    function increaseQuantity(item:Item) {
        //Immutability princip
        const cartItemsCopy=cartItems.map(el=>{return {...el}});
        const elementKojiTrazimo=cartItemsCopy.find(el=>el.id===item.id);
        if(elementKojiTrazimo){
            elementKojiTrazimo.quantity++;
        }else{
            cartItemsCopy.push({...item,quantity:1});
        }
        console.log(elementKojiTrazimo);
        console.log(cartItems);
        console.log("ABRAKADABRA")
        setCartItems(cartItemsCopy);
    }

    function decreaseQuantity(id: number) {
        setCartItems(currItems => {
            //if there is one
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                //give me the new list with all the items except the one with this id that I have gave you
                return currItems.filter(item => item.id !== id)

            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function remove(id: number) {
        setCartItems(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{
        getItemQuantity,
        increaseQuantity, decreaseQuantity, remove, totalNumberItems, cartItems
    }}>
        {children}

    

    </ShoppingCartContext.Provider>
}