
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Components/AllProducts';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Productsdetails from './Components/Productsdetails';

function App() {
  return (
    <div className="App">
      Hello Hemant
      <Navbar/>
      <div>
        <Routes>
         <Route path='/'element={<Home/>}/>
         <Route path='/AllProducts'element={<AllProducts/>}/>
         <Route path='/AllProducts/:id'element={<Productsdetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
