import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'

const SignIn = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <SignInForm></SignInForm>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default SignIn