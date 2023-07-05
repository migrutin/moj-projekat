import React from 'react';
import './App.css';
import Header from './components/Header';
import Underline from './components/Underline';
import BodyPart from './components/BodyPart';
import Footer from './components/Footer';
import AboveFooter from './components/AboveFooter'
import Home from './Home';
import {createBrowserRouter, createRoutesFromElements,  Route, Link, Outlet, RouterProvider, BrowserRouter, Routes} from 'react-router-dom'
import Newsletter from './components/Newsletter';



function App() {

  return (
   
      <div>
        <Header />
        <Underline />
        <BodyPart />
        <Newsletter/>
        <AboveFooter />
        <Footer />

       
      </div>
    
  );
}

export default App;
