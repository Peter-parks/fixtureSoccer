import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cards from './componentes/cards/cards';
import Footer from './componentes/footer/footer';
import MenuBars from './componentes/menuBars/menuBars';
import NavBar from './componentes/navBar/navBar';
import Section from './componentes/section/section';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Section/>
    <App />
    <Cards/>
    <Footer/>
    <MenuBars/>
  </React.StrictMode>
);


