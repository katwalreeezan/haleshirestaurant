import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Events from "./components/Events/Events";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
