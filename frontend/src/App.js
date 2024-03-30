import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home }from './Pages/Home/Home.js';
import { Men } from './Pages/Men/Men.js';
import { Women } from './Pages/Women/Women.js';
import { Kids } from './Pages/Kids/Kids.js';
import { New } from './Pages/New/New.js'
import { Login } from './Pages/Login/Login.js';
import { Logout } from './Pages/Logout/Logout.js';
import Profile from './Pages/Profile/Profile.js';
import {Error} from './Pages/404/404.js';
import {Register} from './Pages/Register/Register.js'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <div>
       <div style={{display: 'grid', gridTemplateColumns: 'ifr', gridTemplateRows: 'auto ifr auto', minHeight: '70svh'}}><Header /><div/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element= {<Men/>} />
          <Route path="/women" element= {<Women/>} />
          <Route path="/kids" element= {<Kids/>} />
          <Route path="/new" element= {<New/>} />
          <Route path ="/login" element = {<Login/> } />
          <Route path = "/logout" element = {<Logout/>} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path ='/register' element = {<Register />} />
          <Route path = "*" element = {<Error />} />
        </Routes>
        <ToastContainer />
      </div>
      </div><Footer /><div/>
    </Router>
  );
}






export default App;
