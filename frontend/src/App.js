import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home }from './Pages/Home/Home.js';
import { Men } from './Pages/Men/Men.js';
import {Women} from './Pages/Women/Women.js';
import { Kids } from './Pages/Kids/Kids.js';
import { New } from './Pages/New/New.js'
import { Signin } from './Pages/Singin/Signin.js'
import Footer from './Components/Footer/Footer.js'

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
          <Route path="/New" element= {<New/>} />
          <Route path="/Sign-in" element= {<Signin/>} />

        </Routes>
      </div>
      </div><Footer /><div/>
    </Router>
  );
}






export default App;
