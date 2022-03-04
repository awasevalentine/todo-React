import './App.css';
import Home from './Components/HomePage/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarPage from './Components/Navbar/navbar';
import Todos from './Components/Todos/todos';

function App() {

  return (
    <Router>
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route path='todos' element={<Todos />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
