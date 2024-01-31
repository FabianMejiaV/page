import chilaquil from './images/chilaquil.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chilaquil} className="App-logo" alt="logo" />
        <p>
          Que oña que oña
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
