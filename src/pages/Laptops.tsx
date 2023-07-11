import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'


function Laptops() {
  const data = require('../data2/laptops.json');
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        {data.laptops.map((laptop: { id: number, name: string, imgUrl: string, price: number }) => (
        <Laptop id={laptop.id} name={laptop.name} imgUrl={laptop.imgUrl} price={laptop.price} key={laptop.id} />
      ))}
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default Laptops