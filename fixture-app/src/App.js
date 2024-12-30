import './App.css';
import Cards from './componentes/cards/Cards';
import Footer from './componentes/footer/Footer';
import MenuBars from './componentes/menuBars/MenuBars';
import Section from './componentes/section/Section';

function App() {
  return (
    <div className="App">
    
    <Section/>
    <Cards/>
    <Footer/>
    <MenuBars/>
    </div>
  );
}

export default App;
