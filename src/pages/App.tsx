import React from 'react';
import './App.css'

import Underline from '../components/Underline';
import BodyPart from '../components/BodyPart';
import Footer from '../components/Footer';
import AboveFooter from '../components/AboveFooter'

import {createBrowserRouter, createRoutesFromElements,  Route, Link, Outlet, RouterProvider, BrowserRouter, Routes} from 'react-router-dom'
import Newsletter from '../components/Newsletter';
import Header from '../components/Header';
import AppRouter from '../AppRouter';
import Novosti from './Novosti';
import Poslovanje from './Poslovanje';
import Promocije from './Promocije';
import Home from './Home';
import Akcije from './Akcije';
import Kontakt from './Kontakt';
import Karijera from './Karijera';
import PromocijeUProdavnicama from './PromocijeUProdavnicama';
import GejmingKorner from './GejmingKorner';



function App() {

  return (
 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/akcije' element={<Akcije/>}/>
    <Route path='/poslovanje' element={<Poslovanje/>}/>
    <Route path='/promocije' element={<Promocije/>}/>
    <Route path='/kontakt' element={<Kontakt/>}/>
    <Route path='/karijera' element={<Karijera/>}/>
    <Route path='/novosti' element={<Novosti/>}/>
    <Route path='/gaming-korner' element={<GejmingKorner/>}/>
    <Route path='/promocije-u-prodavnicama' element={<PromocijeUProdavnicama/>}/>

    
  </Routes>

  );
}

export default App;
