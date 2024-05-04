
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Itemlist from "./pages/Itemlist";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/footer";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/items/:id" element={<Itemlist/>}/>
        <Route exact path="/singleproduct/:id" element={<SingleProduct/>}/>
      </Routes>
      
      <Footer/>

    </>
  )
}

export default App
