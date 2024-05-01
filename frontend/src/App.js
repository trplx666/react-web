import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './Pages/Home/Home.js';
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
import { Protector, userData } from './helpers.js';
import FAQ from './Pages/FAQ/faq.js'
import MenClothes from './Pages/MenClothes/MenClothes.js';
import WomenClothes from './Pages/WomenClothes/WomenClothes.js'
import MenAccessories from './Pages/MenAccessories/MenAccessories.js'
import MenShoes from './Pages/MenShoes/MenShoes.js'
import WomenShoes from './Pages/WomenShoes/WomenShoes.js'
import WomenAccessories from './Pages/WomenAccessories/WomenAccessories.js'
import KidsClothes from './Pages/KidsClothes/KidsClothes.js'
import KidsAccessories from './Pages/KidsAccessories/KidsAccessories.js'
import KidsShoes from './Pages/KidsShoes/KidsShoes.js'
import Faq from './Pages/FAQ/faq.js';
import Order from './Pages/Order/order.js';

function App() {
  const {jwt } = userData()
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto', minHeight: '100svh' }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/new" element={<New />} />
          <Route path="/product-details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Protector Component={Profile} token={jwt} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/men/clothes" element = {<MenClothes/>}/>
          <Route path="/women/clothes" element = {<WomenClothes/>}/>
          <Route path="/men/accessories" element = {<MenAccessories/>}/>
          <Route path="/women/shoes" element = {<WomenShoes/>}/>
          <Route path="/women/accessories" element = {<WomenAccessories/>}/>
          <Route path="/men/shoes" element = {<MenShoes/>}/>
          <Route path="/kids/clothes" element = {<KidsClothes/>}/>
          <Route path="/kids/accessories" element = {<KidsAccessories/>}/>
          <Route path="/kids/shoes" element = {<KidsShoes/>}/>
          <Route path="/profile/orders" element ={< Order/>}/>
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
