import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
const Basket = () => {
  const datas = useSelector((state) => state.ecommerce.basketItems);
  console.log("datas", datas);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div className="card" style={{ width: "18rem", padding: "1.5rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button colorScheme="red">Go somewhere</Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
