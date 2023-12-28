import './App.css';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Navbar from './Componants/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Componants/Home';
import Footer from './Componants/Footer';
import {Routes,Route} from 'react-router-dom'
import Services from './Componants/Services';
import Cards from './Componants/Cards';

function App() {
  return (
    <>
    <div style={{fontFamily:"poppins"}} className='bg-light'>

   
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>
{/* <Cards/> */}
</div>

    </>
   
  );
}

export default App;
