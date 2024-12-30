import './App.css';
import Cards from './componentes/cards/Cards';
import Footer from './componentes/footer/Footer';
import MenuBars from './componentes/menuBars/MenuBars';
import Section from './componentes/section/Section';
import NavBar from './componentes/navBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Section/>
    <Cards/>
    <Footer/>
    <MenuBars/>
    </div>
  );
}

export default App;
