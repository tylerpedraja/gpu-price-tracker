import React from "react";
import ProductCard from "./productCard";

const products = [
  {
    id: "00001",
    title: "RX 580 GPU",
    price: 209.99,
    description: "This is a great, previous-gen GPU",
    url: "https://www.amazon.com/",
    image: "https://webobjects2.cdw.com/is/image/CDW/6505103?$product-detail$",
  },
  {
    id: "00002",
    title: "Nvidia RT4090 GPU",
    price: 999.99,
    description: "This is a great, current-gen GPU",
    url: "https://www.amazon.com/",
    image: "",
  },
];

function ProductList() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-4" key={product.name}>
              <ProductCard
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                url={product.url}
              />
            </div>
          ))}
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
