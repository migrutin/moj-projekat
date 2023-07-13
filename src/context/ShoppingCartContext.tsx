import React, { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import useLocalStorage from '../hooks/useLocalStorage'
type ShoppingCartContext = {

    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    remove: (id: number) => void
    totalNumberItems: number
    cartItems: CartItem[]

}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number;
    quantity: number;
}

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

    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            //if there is none
            if (currItems.find(item => item.id === id) == null) {
                //Add a new one in array 

                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
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