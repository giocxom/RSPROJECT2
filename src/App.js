import logo from './logo.svg';
import './App.css';
import './style/reset.css';
import './style/Catalog.css';
import './style/Apotheca.css';
import './style/About.css';
import './style/Aplication.css'
import './style/Footer.css'
import './style/AboutPage.css'
import './style/Cart.css'
import './style/Fav.css'
import './style/Responsive.css'
import './style/NavBar.css'
import Header from './Components/Header';
import About from './Components/About';
import Clinics from './Components/Clinics';
import Catalog from './Components/Catalog';
import Aphotecas from './Components/Aphotecas';
import {useContext, useMemo, useRef, useState} from 'react';
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import CartContext from './Components/Contexts/cartContext';
import Cart from './Components/Cart';
import Buy from './Components/Buy';
import FavContext from './Components/Contexts/favContext';
import ThemeContext from './Components/Contexts/ThemeContext';
import i18n from "i18next";
  import { initReactI18next, useTranslation } from "react-i18next"; 
import { useEffect } from 'react';
  
  
  
  
  const resources = {
    en: {
      translation: require('./i118/en.json')
    },
    ka: {
      translation: require('./i118/ka.json')
    }
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "ka", 
  
      interpolation: {
        escapeValue: false
      }
    });


function App(){
  
  
  const {t} = useTranslation();
  const [language,setLanguage] = useState('en');
  useEffect(()=>{
    handleLanguageChange
    (language);
  },[language]);

  function handleLanguageChange(lng){
    i18n.changeLanguage(lng);
  }
 
  





   
  const [list, setList]= useState([]);
  const [Fav,setFav] = useState([]);
  const [theme,setTheme]=useState('light');
  


  
  const memoizedList = useMemo (()=>({list,setList}), [list]);
  const memoizedFav = useMemo(()=>({Fav,setFav}), [Fav]);


  return (
    <ThemeContext.Provider
    value={
      {theme: theme,
      setTheme: setTheme}
    }>
    <FavContext.Provider
    value={memoizedFav}>
    <CartContext.Provider
     value={memoizedList}
    ><div className={` App ${theme}`}>
      <div>
      <Header/>
      
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Clinics' element={<Clinics/>}/>
        <Route path='Aphotecas' element={<Aphotecas/>}/>
        <Route path="//:id" element={<AboutPage/>}/>
        <Route path='Cart' element= {<Cart/>}/>
        <Route path='Buy' element= {<Buy/>}/>
      </Routes>
      <div>
        
      <Footer/>
      </div>
      </div>

      
      
        
        
    
    </CartContext.Provider></FavContext.Provider></ThemeContext.Provider>
  )};

export default App;
