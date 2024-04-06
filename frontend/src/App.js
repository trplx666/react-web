import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home.js';
import { Men } from './Pages/Men/Men.js';
import { Women } from './Pages/Women/Women.js';
import { Kids } from './Pages/Kids/Kids.js';
import New from './Pages/New/New.js'
import { Login } from './Pages/Login/Login.js';
import Details from './Pages/Product-info/Details.js'
import Profile from './Pages/Profile/Profile.js';
import { Error } from './Pages/404/404.js';
import { Register } from './Pages/Register/Register.js'
import { ToastContainer } from 'react-toastify';
import { Protector } from './helpers.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/new" element={<New />} />
          <Route path="/product-details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Protector Component={Profile} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
