import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'

function GejmingKorner() {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <GejmingKorner></GejmingKorner>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default GejmingKorner