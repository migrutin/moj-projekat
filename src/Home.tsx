import React from 'react'
import Header from './components/Header'
import Underline from './components/Underline'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import SignUpForm from './components/SignUpForm'

function Home() {
  return (
    <div>
      <Header></Header>
      <Underline></Underline>
      <SignUpForm></SignUpForm>
      <Newsletter></Newsletter>

      <Footer></Footer>
    </div>
  )
}

export default Home