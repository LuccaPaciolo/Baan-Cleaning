import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Booking from './Pages/Booking.jsx'
import Contact from './Pages/Contact.jsx'
import Pricing from './Pages/Pricing.jsx'
import Services from './Pages/Services.jsx'
import Nav from './Components/Nav.jsx'
import './Styles/App.css'
import ScrollToTop from './Components/ScrollToTop.jsx'


function App() {
  return (
    <div>
      <Nav/>
      <ScrollToTop/>
   
      <Routes>    

        <Route path='/' element={<Home/>}/>   
        <Route path='/Home' element={<Home/>}/>   
        <Route path='/About' element ={<About/>}/>                      
        <Route path='/Booking' element ={<Booking/>}/>                      
        <Route path='/Contact' element ={<Contact/>}/>                      
        <Route path='Pricing' element = {<Pricing/>}/>           
        <Route path='/Services' element ={<Services/>}/>                                           
      </Routes>
      
   
      

    </div>
  );
}

export default App;