import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Compornents/Home/Home';
import Navber from './Compornents/Navber/Navber';
import About from './Compornents/Home/About';
import Gellery from './Compornents/Home/Gellery';
import Contact from './Compornents/Home/Contact';
import Footer from './Compornents/Home/Footer';
import Skill from './Compornents/Home/Skill';

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/gellery' element={<Gellery></Gellery>}></Route>
        {/* <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route> */}
        <Route path='/skill' element={<Skill></Skill>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
