import React from 'react';
import './App.css'

import Underline from '../components/Underline';
import BodyPart from '../components/BodyPart';
import Footer from '../components/Footer';
import AboveFooter from '../components/AboveFooter'

import {createBrowserRouter, createRoutesFromElements,  Route, Link, Outlet, RouterProvider, BrowserRouter, Routes} from 'react-router-dom'
import Newsletter from '../components/Newsletter';
import Header from '../components/Header';



function App() {

  return (
   
      <div>
        <Header/>
        <Underline />
        <BodyPart />
        <Newsletter/>
        <AboveFooter />
        <Footer />

       
      </div>
    
  );
}

export default App;
