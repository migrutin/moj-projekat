import './App.css'
import {Route, Routes } from 'react-router-dom'
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import Novosti from './Novosti';
import Poslovanje from './Poslovanje';
import Promocije from './Promocije';
import Home from './Home';
import Akcije from './Akcije';
import Kontakt from './Kontakt';
import PromocijeUProdavnicama from './PromocijeUProdavnicama';
import GejmingKorner from './GejmingKorner';
import Klime from './Klime';
import Globaltel from './Globaltel';
import PortablePCs from './PortablePCs';
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
import ComponentPage from './ComponentPage';
import GamePage from './GamePage';
import OpremaPage from './OpremaPage';
import KeyboardPage from './KeyboardPage';
import BasePage from './BasePage';
import PrinterPage from './PrinterPage';
import SpeakerPage from './SpeakerPage';
import MikePage from './MikePage';
import SignInPage from './SignInPage';
import CablePage from './CablePage';
import TvAudioVideoPage from './TvAudioVideoPage';
import TvPage from './TvPage';
import ProjectorPage from './ProjectorPage';
import AudioVideoPage from './AudioVideoPage';
import BatteryPage from './BatteryPage';
import RadioStationPage from './RadioStationPage';
import ElectroProtectionPage from './ElectroProtectionPage';
import MobilniOpremaPage from './MobliniOpremaPage';
import MobilePage from './MobilePage';
import TabletPage from './TabletPage';
import WatchesPage from './WatchesPage';
import HeadphonesPage from './HeadphonesPage';
import BSpeakerPage from './BSpeakerPage';
import MemoryCardPage from './MemoryCardPage';
import PowerBankPage from './PowerBankPage';
import AirCondPage from './AirCondPage';
import HomeAppPage from './HomePage';
import KitchenAppPage from './KitchenAppPage';
import AppliancePage from './AppliancePage';
import UgradnjaKlimaPage from './UgradnjaKlimaPage';
import MontazaTvPage from './MontazaTvPage';





const App = () => {

  return (

    <ShoppingCartProvider>
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/akcije' element={<Akcije />} />
      <Route path='/poslovanje' element={<Poslovanje />} />
      <Route path='/promocije' element={<Promocije />} />
      <Route path='/kontakt' element={<Kontakt />} />
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
      <Route path='/tastature' element={<KeyboardPage/>} />
      <Route path='/podloge' element={<BasePage/>} />
      <Route path='/stampaci' element={<PrinterPage/>}/>
      <Route path='/zvucnici' element={<SpeakerPage/>}/>
      <Route path='/mikrofoni' element={<MikePage/>}/>
      <Route path='/kablovi' element={<CablePage/>}/>
      <Route path='/tv-audio-video' element={<TvAudioVideoPage/>}/>
      <Route path='/tv' element={<TvPage/>}/>
      <Route path='/audio-video-oprema' element={<AudioVideoPage/>}/>
      <Route path='/baterije' element={<BatteryPage/>}/>
      <Route path='/radio-stanice' element={<RadioStationPage/>}/>
      <Route path='/projektori' element={<ProjectorPage/>}/>
      <Route path='/elektro-zastita' element={<ElectroProtectionPage/>}/>
      <Route path='/mobilni-telefoni' element={<MobilniOpremaPage/>}/>
      <Route path='/mobilni' element={<MobilePage/>}/>
      <Route path='/tablet-racunari' element={<TabletPage/>}/>
      <Route path='/pametni-satovi' element={<WatchesPage/>}/>
      <Route path='/slusalice' element={<HeadphonesPage/>}/>
      <Route path='/bezicni-zvucnici' element={<BSpeakerPage/>}/>
      <Route path='/memorijske-kartice' element={<MemoryCardPage/>}/>
      <Route path='/eksterne-baterije' element={<PowerBankPage/>}/>
      <Route path='/klima-uredjaji' element={<AirCondPage/>}/>
      <Route path='/mali-kucni-aparati' element={<HomeAppPage/>}/>
      <Route path='/mali-kuhinjski-aparati' element={<KitchenAppPage/>}/>
      <Route path='/bela-tehnika' element={<AppliancePage/>}/>
      <Route path='/ugradnja-klima' element={<UgradnjaKlimaPage/>}/>
      <Route path='/montaza-televizora' element={<MontazaTvPage/>}/>
      



      

      <Route path='/login' element={<SignInPage />} />
      <Route path='/registracija' element={<NewUser />} />
      <Route path='/korpa' element={<ShoppingBasket />} />



    </Routes>
    
    </ShoppingCartProvider>


  );
}

export default App;
