import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import MemoryCards from '../components/MemoryCards'


const MemoryCardPage = () => {
  return (
    <div>
        <Header></Header>
        <Underline></Underline>
        <MemoryCards></MemoryCards>
        <Newsletter></Newsletter>
        <AboveFooter></AboveFooter>
        <Footer></Footer>
    </div>
  )
}

export default MemoryCardPage