import React from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Dockers from '../components/Dockers'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Docker from '../components/Docker'

const DockerPage = () => {
  return (
    <div>
      <Header></Header>
      <Underline></Underline>
      <Docker arrayDockers={[]}></Docker>
      <Newsletter></Newsletter>
      <AboveFooter></AboveFooter>
      <Footer></Footer>
    </div>
  )
}

export default DockerPage