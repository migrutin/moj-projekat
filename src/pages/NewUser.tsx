import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import SignInForm from '../components/SignInForm'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import NewUserForm from '../components/NewUserForm'

const NewUser = () => {
  return (
    <div>
         <Header></Header>
        <Underline></Underline>
        <NewUserForm></NewUserForm>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default NewUser