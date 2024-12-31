import './App.css';
import React from 'react';
import Cards from './componentes/cards/Cards';
import Footer from './componentes/footer/Footer';

import Section from './componentes/section/Section';
import NavBar from './componentes/navBar/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
