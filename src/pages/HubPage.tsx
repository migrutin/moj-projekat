import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Hubs from '../components/UsbHubs'

const HubPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Hubs></Hubs>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default HubPage