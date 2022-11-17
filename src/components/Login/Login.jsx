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
  Link,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CFaLock = chakra(FaLock);

const Login = () => {
  const notify = () => toast.error("Mail və ya şifrə doğru deyil");
  const notify2 = () => toast.success("Giriş uğurludur!");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToPage = () => {
    navigate("/card");
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("formData"));
    const findData = localStorageData.find(
      (item) => item.email === form.email && form.password === item.password
    );

    if (findData) {
      notify2();
      setTimeout(() => {
        navigateToPage();
      }, 2500);
    }
    if (!findData) {
      notify();
    }
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
        <Heading color="red.400">Welcome</Heading>
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
                    value={form.email}
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
                    value={form.password}
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
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link onClick={navigateToRegister} color="red.500">
          Sign Up
        </Link>
      </Box>
      <ToastContainer />
    </Flex>
  );
};

export default Login;
