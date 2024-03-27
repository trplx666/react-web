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


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Заменим component на element */}
          <Route exact path="/men" element= {<Men/>} />
          <Route path="/women" element= {<Women/>} />
          <Route path="/kids" element= {<Kids/>} />
          <Route path="/New" element= {<New/>} />
          <Route path="/Sign-in" element= {<Signin/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
