// import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent';
import TodoApp from './todos/TodoApp';

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
        {/* <MyComponent /> */}
        <TodoApp></TodoApp>
      </header>
    </div>
  );
}

export default App;
