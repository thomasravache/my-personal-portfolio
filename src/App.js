import Navbar from './components/Navbar';
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className="">
      <Navbar currentRoute={ currentRoute } setCurrentRoute={ setCurrentRoute }/>
    </div>
  );
}

export default App;
