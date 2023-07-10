import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Glob from '../components/Glob'

function Globaltel() {
  return (
    <div>
         <Header></Header>
        <Underline></Underline>
        <Glob></Glob>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default Globaltel