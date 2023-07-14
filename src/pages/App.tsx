import './App.css'
import {Route, Routes } from 'react-router-dom'
import Novosti from './Novosti';
import Poslovanje from './Poslovanje';
import Promocije from './Promocije';
import Home from './Home';
import Akcije from './Akcije';
import Kontakt from './Kontakt';
import Karijera from './Karijera';
import PromocijeUProdavnicama from './PromocijeUProdavnicama';
import GejmingKorner from './GejmingKorner';
import Klime from './Klime';
import Globaltel from './Globaltel';
import PortablePCs from './PortablePCs';
import SignIn from './SignIn';
import NewUser from './NewUser';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import ShoppingBasket from './ShoppingBasket';
import LaptopPage from './LaptopPage';
import MicePage from './MicePage';
import BagsPage from './BagsPage';
import DockerPage from './DockerPage';
import BonusPage from './BonusPage';
import KupovinaNaRate from './KupovinaNaRate';




function App() {

  return (

    <ShoppingCartProvider>
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/akcije' element={<Akcije />} />
      <Route path='/poslovanje' element={<Poslovanje />} />
      <Route path='/promocije' element={<Promocije />} />
      <Route path='/kontakt' element={<Kontakt />} />
      <Route path='/karijera' element={<Karijera />} />
      <Route path='/novosti' element={<Novosti />} />
      <Route path='/gaming-korner' element={<GejmingKorner />} />
      <Route path='/promocije-u-prodavnicama' element={<PromocijeUProdavnicama />} />
      <Route path='/klime' element={<Klime />} />
      <Route path='/globaltel' element={<Globaltel />} />
      <Route path='/portable-pc' element={<PortablePCs />} />
      <Route path='/laptops' element={<LaptopPage />} />
      <Route path='/mice' element={<MicePage/>} />
      <Route path='/bags' element={<BagsPage/>} />
      <Route path='/dockers' element={<DockerPage/>} />
      <Route path='/bonus' element={<BonusPage/>} />
      <Route path='/kupovina-na-rate' element={<KupovinaNaRate/>} />


      


      <Route path='/login' element={<SignIn />} />
      <Route path='/registracija' element={<NewUser />} />
      <Route path='/korpa' element={<ShoppingBasket />} />



    </Routes>
    
    </ShoppingCartProvider>


  );
}

export default App;
