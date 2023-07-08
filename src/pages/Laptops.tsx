import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'


function Laptops() {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Laptop></Laptop>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default Laptops