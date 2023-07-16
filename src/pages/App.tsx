import './App.css'
import {Route, Routes } from 'react-router-dom'
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
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
import ShoppingBasket from './ShoppingBasket';
import LaptopPage from './LaptopPage';
import MicePage from './MicePage';
import BagsPage from './BagsPage';
import DockerPage from './DockerPage';
import BonusPage from './BonusPage';
import ChargerPage from './ChargerPage';
import HubPage from './HubPage';
import CoolerPage from './CoolerPage';
import OperatingSystemsPag from './OperatingSystemsPage';
import SoftwarePage from './SoftwarePage';
import NacinPlacanjaPage from './NacinPlacanjaPage';
import RacunariPage from './RacunariPage';
import DesktopPage from './DesktopPage';
import BrandNameRacunariPage from './BrandNameRacunariPage';
import AllInPage from './AllInPage';
import MonitorPage from './MonitorPage';
import Components from '../components/Components';
import ComponentPage from './ComponentPage';
import GamePage from './GamePage';
import OpremaPage from './OpremaPage';
import KeyboardPage from './KeyboardPage';
import BasePage from './BasePage';





const App = () => {

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
      <Route path='/nacin-placanja' element={<NacinPlacanjaPage/>} />
      <Route path='/isporuka' element={<BonusPage/>} />
      <Route path='/chargers' element={<ChargerPage/>} />
      <Route path='/hub' element={<HubPage/>} />
      <Route path='/coolers' element={<CoolerPage/>} />
      <Route path='/os' element={<OperatingSystemsPag/>} />
      <Route path='/software' element={<SoftwarePage/>} />
      <Route path='/racunari' element={<RacunariPage/>} />
      <Route path='/desktop-racunari' element={<DesktopPage/>} />
      <Route path='/brand-name-racunari' element={<BrandNameRacunariPage/>} />
      <Route path='/all-in-one' element={<AllInPage/>} />
      <Route path='/monitori' element={<MonitorPage/>} />
      <Route path='/komponente' element={<ComponentPage/>} />
      <Route path='/igre' element={<GamePage/>} />
      <Route path='/oprema' element={<OpremaPage/>} />
      <Route path='/podloge' element={<BasePage/>} />


      

      <Route path='/login' element={<SignIn />} />
      <Route path='/registracija' element={<NewUser />} />
      <Route path='/korpa' element={<ShoppingBasket />} />



    </Routes>
    
    </ShoppingCartProvider>


  );
}

export default App;
