import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Speakers from '../components/Speakers'
import Mikes from '../components/Mikes'


const MikePage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Mikes></Mikes>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default MikePage