
import './App.css';
import Cart from "./components/Cart";
import Shop from "./components/Shop"
import WishList from "./components/WishList";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {
 
  Route,
  Routes
} from "react-router-dom";
function App() {
  
  return (


    <div className="App">
    <Sidebar />
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        
        </Routes>  
    </div>
  
  );
}

export default App;
