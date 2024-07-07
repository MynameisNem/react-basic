import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';

/**
 * 2 loại components: class component / function component (function, arrow: chính là "=>")
 * 
 * 
 * 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
