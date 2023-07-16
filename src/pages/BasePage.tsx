import Header from '../components/Header'
import Underline from '../components/Underline'
import Bags from '../components/Bags'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Bases from '../components/Bases'

const BasePage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Bases></Bases>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default BasePage