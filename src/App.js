import './App.css';
import Home from './Components/HomePage/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarPage from './Components/Navbar/navbar';
import Todos from './Pages/Todos/todos';
import NewTodo from './Pages/Todos/addNew-todos';
import TodoDetails from './Components/Todo/todo_details';
import EditTodo from './Pages/Todos/edit-todo';

export const BASE_URL = 'http://localhost:8081/'

function App() {

  return (
    <Router>
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='todos' element={<Todos />} />
        <Route exact path='new-todos' element={<NewTodo />} />
        <Route exact path='todo-details/:todoId' element={<TodoDetails />} />
        <Route exact path='edit-todo/:todoId' element = {<EditTodo />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
