import React, { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import useLocalStorage from '../hooks/useLocalStorage'

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseQuantity: (item: Item) => void
  decreaseQuantity: (id: number) => void
  remove: (id: number) => void
  totalNumberItems: number
  cartItems: CartItem[]
  totalPrice: number // Added totalPrice field
}

type ShoppingCartProviderProps = {
  children: ReactNode
}

type Item = {
  id: number
  name: string
  imgUrl: string
  price: number
}

type CartItem = Item & { quantity: number }

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])

  const totalNumberItems = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseQuantity(item: Item) {
    const cartItemsCopy = cartItems.map(el => ({ ...el }))
    const elementKojiTrazimo = cartItemsCopy.find(el => el.id === item.id)
    if (elementKojiTrazimo) {
      elementKojiTrazimo.quantity++
    } else {
      cartItemsCopy.push({ ...item, quantity: 1 })
    }
    setCartItems(cartItemsCopy)
  }

  function decreaseQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
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

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuantity,
      increaseQuantity,
      decreaseQuantity,
      remove,
      totalNumberItems,
      cartItems,
      totalPrice // Include totalPrice in the context value
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
