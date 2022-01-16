import { useState, useEffect } from "react";
import axios from "axios";
import { IoChevronBackCircleOutline, IoChevronForwardCircle } from "react-icons/io5";

import Description from "./Description";
const Main = () => {
  const URL = "https://fakestoreapi.com/products?limit=5";
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState({});

  useEffect(() => {
    axios.get(URL).then((res) => {
      setProducts(res.data);
      setCurrProduct(res.data[0]);
    })
    .catch(()=>console.error());
  }, []);

  return (
    <main>
      <div className="product_left">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="product_left_row" onClick={(e) => {
                setCurrProduct(product);
                const element = document.getElementById("product_right");
                element.scrollIntoView({behavior: "smooth"});
              }}>
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className='title'>
                  {product.title}
                </div>
                <div

                >
                  {currProduct.id===product.id ? (
                    <IoChevronForwardCircle size={60} color="#119DA4"/>
                  ) : (
                    <IoChevronBackCircleOutline size={60} color="#119DA4"/>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="product_right" id="product_right">
        <Description product={currProduct} />
      </div>
    </main>
  );
};

export default Main;
