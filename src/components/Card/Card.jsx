import React, { useEffect, useState } from "react";
import { Box, Image, Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../Backend";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ecommerceActions } from "../../redux/EcommerceSlice";

const Card = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  // console.log(list);
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
  return (
    <>
      <div style={{ width: "250px", display: "flex", margin: "0 auto" }}>
        <input
          type="text"
          name="search"
          onChange={(e) => setsearchTab(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <Grid templateColumns="repeat(3,1fr)" gap={18}>
          {list
            .filter((item) => item.title?.includes(searchTab))
            .map((item, key) => (
              <Box
                key={item.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="6"
                style={{
                  marginTop: "10px",
                  width: "350px",
                  height: "400px",
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
                    style={{ letterSpacing: "1px" }}
                    p={2}
                  >
                    <h6> Category({item.category})</h6>
                    <br /> <hr />
                    {item.title}
                  </Box>
                  <Box>
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
                  colorScheme="pink"
                >
                  Add to basket
                </Button>
              </Box>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Card;
