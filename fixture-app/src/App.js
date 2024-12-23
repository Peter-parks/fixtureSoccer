import './App.css';
import Cards from './componentes/cards/cards';
import Footer from './componentes/footer/footer';
import MenuBars from './componentes/menuBars/menuBars';
import Navbar from './componentes/navBar/Navbar';
import Section from './componentes/section/section';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Section/>
    <Cards/>
    <Footer/>
    <MenuBars/>
    </div>
  );
}

export default App;
