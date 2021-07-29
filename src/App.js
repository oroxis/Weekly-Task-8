import './App.css';
import Persons from './components/PersonList';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY WEEK 8 TASK</h1>
      </header>

    <div class="d-none d-sm-block">
 <Persons/> 
    </div>
    <footer style= {{backgroundColor: 'blueviolet', textAlign: 'center'}}>
    <h1>THANK YOU</h1>
    </footer>
    </div>
  );
}

export default App;
