import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Monitors from '../components/Monitors'

const MonitorPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Monitors></Monitors>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default MonitorPage