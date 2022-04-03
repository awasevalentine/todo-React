import './App.css';
import Home from './Components/HomePage/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarPage from './Components/Navbar/navbar';
import Todos from './Components/Todos/todos';
import NewTodo from './Components/New-Todos/new-todo';
import TodoDetails from './Components/Todo-Details/todo_details';

function App() {

  return (
    <Router>
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route path='todos' element={<Todos />} />
        <Route path='new-todos' element={<NewTodo />} />
        <Route path='todo-details' element={<TodoDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
