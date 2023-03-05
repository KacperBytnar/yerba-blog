import Home from './Home';
import Navbar from './Navbar';

function App() {
  // const person = {name: 'yoshi', age: 20};
  return (
    <div className="App">
    <Navbar />
    <div className='content'>
      <Home />
    </div>
    </div>
  );
}

export default App;
