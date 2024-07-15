import './App.scss';
import MyComponent from './example/MyComponent';
import TodoApp from './todos/TodoApp';
import Navigation from './nav/Navigation.js';
import Home from './navMenu/Home.js';
import AboutMe from './AboutMe.js';
import { Routes, Route } from 'react-router-dom';
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
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/todoapp' element={<TodoApp></TodoApp>}></Route>
          <Route path='/htmlform' element={<MyComponent />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
        </Routes >
      </header>
    </div>


  );
}

export default App;
