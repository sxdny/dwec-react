import Home from './Home';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home children="Test">
  
      </Home>
    </div>
  );
}

export default App;
