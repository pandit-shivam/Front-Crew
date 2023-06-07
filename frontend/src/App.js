//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/main/Navbar';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Sign_up from './Components/main/Sign_up';
import Home from './Components/main/Home';
import Main from './Components/main/Index';
import Login from './Components/main/Login';
import Contact from './Components/main/Contact';

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/" element={<Navigate to="/main/Home" />} />
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="sign_up" element={<Sign_up />} />
            <Route path="Login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
