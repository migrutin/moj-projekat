import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Oprema from '../components/Oprema'

const OpremaPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Oprema></Oprema>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default OpremaPage