import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import PortablePC from '../components/PortablePC'

const PortablePCs = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <PortablePC></PortablePC>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default PortablePCs