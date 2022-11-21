 import axios from "axios";
import React, { useEffect, useState } from "react";
 import { Link, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../Backend";
import "./ItemInfo.css";

const ItemInfo = () => {
  const [itemInfo, setIteminfo] = useState({});
  console.log("iteminfo", itemInfo);

  const { id } = useParams();

   

  useEffect(() => {
    axios
      .get(BACKEND_URL + `/products/${id}`)
      .then((rsp) => setIteminfo(rsp.data));
  }, []);

  return (
    <>
      <div class="codepen-container">
        <div class="content-container">
          <div class="left-container">
            <div class="triangle-topleft">
              <Link to="/card" class="back-arrow" id="buy-toaster"></Link>
            </div>
            <div class="product-image--container">
              <img
                class="product-image--featured"
                id="featured"
                src={itemInfo.images ? itemInfo.images[2] : ""}
                alt="toaster"
                style={{ width: "550px" }}
              />
            </div>
          </div>
          <div class="right-container">
            <div>
              <h1 class="title">{itemInfo.title}</h1>
              <h2 class="subtitle subtitle-container">{itemInfo.category}</h2>
            </div>
            <span>
              <p>
                Price:
                <span class="emphasize">${itemInfo.price}</span>
              </p>
            </span>
            <div>
              <h2 class="title">Product Description</h2>
              <div class="subtitle-container">
                <span>Rating:{itemInfo.rating}</span>
                <span>|</span>
                <span>Stock:{itemInfo.stock}</span>
              </div>
              <p>{itemInfo.description}</p>
            </div>
            <div>
              <button class="my-btn flex-btn">
                <span>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-128.png"
                    class="cart-icon"
                  />
                </span>
                <span class="btn-text">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInfo;
