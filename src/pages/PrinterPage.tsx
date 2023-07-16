import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Printers from '../components/Prineters'


const PrinterPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <Printers></Printers>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default PrinterPage