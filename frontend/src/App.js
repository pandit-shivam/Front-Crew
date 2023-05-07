//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/main/Navbar';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Sign_up from './Components/main/Sign_up';
import Home from './Components/main/Home';
import Main from './Components/main';
import Login from './Components/main/login';

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
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
