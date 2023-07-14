import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import PromotionsInStores from '../components/PromotionsInStores'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'

const PromocijeUProdavnicama = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <PromotionsInStores></PromotionsInStores>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default PromocijeUProdavnicama