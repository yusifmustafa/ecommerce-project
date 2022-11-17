import React from "react";
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const notify = () => toast.error("Xanaları tam şəkildə doldurun");
  const notify2 = () => toast.success("Qeydiyyat uğurludur");
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

  const [registerForm, setRegisterform] = useState([
    {
      email: "",
      password: "",
      username: "",
    },
  ]);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleOnChange = (e) => {
    setRegisterform({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("formData"));
     let formData = localStorageData ? localStorageData : [];
     formData.push({
      email: registerForm.email,
      password: registerForm.password,
      username: registerForm.username,
    });

    localStorage.setItem("formData", JSON.stringify(formData));
    if (
      registerForm.email === "" ||
      registerForm.password === "" ||
      registerForm.username === ""
    ) {
      notify();
      return;
    }

    notify2();
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="red.500" />
        <Heading color="red.400">Register Page</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleOnSubmit}>
            <Stack
              spacing={6}
              p="2rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <EmailIcon
                        color="gray.300"
                        style={{ marginBottom: "2.5rem" }}
                      />
                    }
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="email address"
                    onChange={handleOnChange}
                    value={registerForm.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <CFaUserAlt
                        color="gray.300"
                        style={{ marginBottom: "2.5rem" }}
                      />
                    }
                  />
                  <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={handleOnChange}
                    value={registerForm.username}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={
                      <CFaLock
                        color="gray.300"
                        style={{ marginBottom: "2.5rem" }}
                      />
                    }
                  />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleOnChange}
                    value={registerForm.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="red"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
        <Box>
          Go to Login Page{" "}
          <Link to="/" color="red.300">
            Login
          </Link>
        </Box>
      </Stack>
      <ToastContainer />
    </Flex>
  );
};

export default Register;
