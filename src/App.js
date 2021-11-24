import React from 'react';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import Home from './components/Home';
import About from './components/About';
import useNavigation from './hooks/useNavigation';
import appStyles from './appStyles';
import Skills from './components/Skills';

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className={appStyles.container}>
      <Navbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
      <Home />
      <About />
      <Skills />
      <Tabbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
    </div>
  );
}

export default App;
