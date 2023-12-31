import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import AirConditioners from '../components/AirConditioners'

const AirCondPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <AirConditioners></AirConditioners>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default AirCondPage