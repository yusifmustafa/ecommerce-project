import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../Backend";
import "./ItemInfo.css";

const ItemInfo = () => {
  const [itemInfo, setIteminfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(BACKEND_URL + `/products/${id}`)
      .then((rsp) => setIteminfo(rsp.data));
  }, []);

  return (
    <div className="itemInfo">
      <Card style={{ width: "28rem", padding: "1.5rem" }}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
          <Box d="flex" alignItems="center">
            <Image
              w={150}
              h={150}
              src={`${itemInfo.image}`}
              alt={itemInfo.title}
              style={{ margin: "0 auto" }}
            />
          </Box>
          <Box mt="1" fontWeight="600" as="h4" lineHeight="tight">
            <h2>{itemInfo.title}</h2>
          </Box>
          <hr />

          <hr />
          <Box p={4}>
            <h6>{itemInfo.description}</h6>
            <hr />
          </Box>
          <hr />
          <Box p={2} float="right">
            <strong>Price:${itemInfo.price}</strong>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default ItemInfo;
