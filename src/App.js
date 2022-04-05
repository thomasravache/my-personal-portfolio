import React from 'react';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import Home from './components/Home';
import About from './components/About';
import useNavigation from './hooks/useNavigation';
import appStyles from './appStyles';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className={appStyles.container}>
      <Navbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Tabbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
    </div>
  );
}

export default App;
