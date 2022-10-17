import React, { useEffect, useState } from "react";
import { Box, Image, Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../Backend";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ecommerceActions } from "../../redux/EcommerceSlice";
import "./Card.css";
import Navbar from "../Navbar/Navbar";

const Card = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [searchTab, setsearchTab] = useState("");

  const handleAddToBasket = (id) => {
    dispatch(
      ecommerceActions.insertBasket({
        data: id,
      })
    );
  };

  useEffect(() => {
    axios.get(BACKEND_URL + "/products").then((rsp) => setList(rsp.data));
  }, []);

  const handleClickCategory = (e) => {
    if (e.target.innerText === "Man") {
      setFilteredCategory("men's clothing");
    }
    if (e.target.innerText === "Woman") {
      setFilteredCategory("women's clothing");
    }
    if (e.target.innerText === "Electronics") {
      setFilteredCategory("electronics");
    }
    if (e.target.innerText === "Jewelery") {
      setFilteredCategory("jewelery");
    }
    if (e.target.innerText === "All") {
      setFilteredCategory("");
    }
  };
  return (
    <div className="products">
      <Navbar />
      <div className="buttons">
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          All
        </Button>
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Man
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Woman
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Electronics
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Jewelery
        </Button>{" "}
      </div>
      <div style={{ width: "250px", display: "flex", margin: "0 auto" }}>
        <input
          type="text"
          name="search"
          onChange={(e) => setsearchTab(e.target.value)}
          variant="standard"
          placeholder="Search"
        />
      </div>
      <div
        className="product-list"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <Grid templateColumns="repeat(3,1fr)" gap={18}>
          {list
            .filter((item) => item.title?.includes(searchTab))
            .filter((item) =>
              filteredCategory === ""
                ? list
                : item.category === filteredCategory
            )
            .map((item, key) => (
              <Box
                key={item.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="8"
                style={{
                  marginTop: "10px",
                  width: "350px",
                  height: "440px",
                }}
              >
                <Link to={`/itemInfo/${item.id}`}>
                  <Box d="flex" alignItems="center">
                    <div
                      style={{
                        background: "white",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "inherit",
                      }}
                    >
                      {<Image w={150} h={150} src={`${item.image}`} />}
                    </div>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    style={{
                      letterSpacing: "1px",
                      height: "95px",
                      overflow: "hidden",
                    }}
                    p={2}
                  >
                    <h6>Category({item.category})</h6>
                    <br /> <hr />
                    <div>{item.title}</div>
                  </Box>
                  <Box style={{ marginTop: "10px" }}>
                    {" "}
                    <strong>${item.price}</strong>{" "}
                    <span>{item.rating.count}</span>
                  </Box>
                  <Box>
                    <small style={{ letterSpacing: "1px" }}>
                      rating({item.rating.rate})
                    </small>
                  </Box>
                  <Text
                    style={{
                      wordBreak: "break-all",
                      textOverFlow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    title={item.description}
                  >
                    {item.description}
                  </Text>
                </Link>
                <Button
                  onClick={() => handleAddToBasket(item.id)}
                  style={{ marginTop: "1rem" }}
                  colorScheme="red"
                >
                  Add to basket
                </Button>
              </Box>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Card;
