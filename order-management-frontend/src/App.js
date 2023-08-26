import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import CustomerList from "./Pages/Customers/CustomerList";
import CustomerAdd from "./Pages/Customers/CustomerAdd";
import CustomerUpdate from "./Pages/Customers/CustomerUpdate";
import ProductList from "./Pages/Products/ProductList";
import ProductAdd from "./Pages/Products/ProductAdd";
import ProductUpdate from "./Pages/Products/ProductUpdate";
import OrderList from "./Pages/Orders/OrderList";
import OrderAdd from "./Pages/Orders/OrderAdd";
import OrderUpdate from "./Pages/Orders/OrderUpdate";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/customeradd" element={<CustomerAdd />} />
          <Route path="/:id/customerupdate" element={<CustomerUpdate />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/:id/productupdate" element={<ProductUpdate />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderadd" element={<OrderAdd />} />
          <Route path="/:id/orderupdate" element={<OrderUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;
