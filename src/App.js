import './App.css';
import About from './components/about/About.js'
import Introduction from './components/introduction/Introduction.js';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import ContactIcons from './components/contacticons/ContactIcons';

function App() {
  return (
    <div className="App">
      <title>Ayoub Said</title>
      <Header />
      <div className='template'>
        <div>
          <ContactIcons />
        </div>
        <div>
          <Introduction />
          <About />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
