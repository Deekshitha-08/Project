import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './Components/Cart';
import Admin from './Admin';
import Checkout from './Components/CheckOut';



import Product from './Product';
import LoginSuccess from './LoginSuccess';


  
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/product' element={<Product/>}/>
        <Route path='/loginsuccess' element={<LoginSuccess/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
       
        
      </Routes>
      
    </Router>
    </div>
      <Footer />
    </div>
  );
}
  
export default App;
