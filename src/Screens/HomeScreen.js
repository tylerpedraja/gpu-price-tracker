import Navbar from "../Components/Navbar";
import ProductList from "../Components/Products/ProductList";
import Footer from "../Components/Footer";
import React from "react";

function HomeScreen() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Footer />
    </React.Fragment>
  );
}

export default HomeScreen;
