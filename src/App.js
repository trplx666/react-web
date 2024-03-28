import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home }from './Components/Home/Home.js';
import { Men } from './Components/Men/Men.js';
import { Women } from './Components/Women/Women.js';
import { Kids } from './Components/Kids/Kids.js';
import { New } from './Components/New/New.js'
import { Signin } from './Components/Singin/Signin.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <Router>
      <div>
       <div style={{display: 'grid', gridTemplateColumns: 'ifr', gridTemplateRows: 'auto ifr auto', minHeight: '100svh'}}><Header /><div/>
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
