import React from 'react';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className="">
      <Navbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
      <Tabbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
    </div>
  );
}

export default App;
