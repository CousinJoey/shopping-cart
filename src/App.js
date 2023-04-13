import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./componets/homePage";
import About from "./componets/about";
import Accesories from "./componets/accesories";
import Sales from "./componets/sale";
import Mens from "./componets/mens";
import Womens from "./componets/womens";
import Collections from "./componets/collections";
import ProductPage from "./componets/childComponents/productPage";
import Cart from "./componets/childComponents/cart";
import Search from "./componets/search";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route default path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/accesories" element={<Accesories />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
