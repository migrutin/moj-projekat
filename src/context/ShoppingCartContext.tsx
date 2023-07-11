import React, { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
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
    quantaty: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)



export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])


    const totalNumberItems = cartItems.reduce(
        (quantity, item) => item.quantaty + quantity, 0
    )


    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantaty || 0

    }

    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            //if there is none
            if (currItems.find(item => item.id === id) == null) {
                //Add a new one in array 

                return [...currItems, { id, quantaty: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantaty: item.quantaty + 1 }
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
            if (currItems.find(item => item.id === id)?.quantaty === 1) {
                //give me the new list with all the items except the one with this id that I have gave you
                return currItems.filter(item => item.id !== id)

            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantaty: item.quantaty - 1 }
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

        <ShoppingCart></ShoppingCart>

    </ShoppingCartContext.Provider>
}