import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import GKorner from '../components/GKorner'

function GejmingKorner() {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <GKorner></GKorner>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default GejmingKorner