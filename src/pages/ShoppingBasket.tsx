import React from 'react'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import EmptyBasket from '../components/EmptyBasket'
import AboveFooter from '../components/AboveFooter'

function ShoppingBasket() {
  return (
    <div>
        <Header></Header>
        <EmptyBasket></EmptyBasket>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>



    </div>
  )
}

export default ShoppingBasket