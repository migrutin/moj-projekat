import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import AllIns from '../components/AllIns'

const AllInPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <AllIns></AllIns>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default AllInPage