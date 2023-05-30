import './App.css';
import About from './components/about/About.js'
import Introduction from './components/introduction/Introduction.js';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import ContactIcons from './components/contacticons/ContactIcons';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='template'>
        <div>
          <ContactIcons />
        </div>
        <div>
          <Introduction />
          <About />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
