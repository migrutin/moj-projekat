import React from 'react'

import Promotions from '../components/Promotions'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'

function Promocije() {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Promotions></Promotions>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default Promocije