import React, { useEffect, useState } from "react";
import { Box, Image, Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../Backend";
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
    const fetchData = async () => {
      const data = await fetch(BACKEND_URL + "/products");
      const json = await data.json();
      console.log("json", json);
      setList(json);
    };
    fetchData();
  }, []);
  console.log("list", list.products);

  const handleClickCategory = (e) => {
    if (e.target.innerText === "Smartphones") {
      setFilteredCategory("smartphones");
    }
    if (e.target.innerText === "Laptops") {
      setFilteredCategory("laptops");
    }
    if (e.target.innerText === "Fragrances") {
      setFilteredCategory("fragrances");
    }
    if (e.target.innerText === "Skincare") {
      setFilteredCategory("skincare");
    }
    if (e.target.innerText === "Groceries") {
      setFilteredCategory("groceries");
    }
    if (e.target.innerText === "Home-decoration") {
      setFilteredCategory("home-decoration");
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
          Smartphones
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Laptops
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Fragrances
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Skincare
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Groceries
        </Button>{" "}
        <Button
          onClick={handleClickCategory}
          colorScheme="pink"
          variant="ghost"
        >
          Home-decoration
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
        {
          <Grid templateColumns="repeat(4,1fr)" gap={18}>
            {list.products &&
              list.products
                .filter((item) => item.title?.includes(searchTab))
                .filter((item) =>
                  filteredCategory === ""
                    ? list.products
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
                          {<Image w={180} h={150} src={`${item.images[0]}`} />}
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
        }
      </div>
    </div>
  );
};

export default Card;
