import React from 'react'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AboveFooter from '../components/AboveFooter'
import ShoppingCart from '../components/ShoppingCart'

const ShoppingBasket = () => {
  return (
    <div>
        <Header></Header>
        <ShoppingCart></ShoppingCart>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>



    </div>
  )
}

export default ShoppingBasket