import React from "react";
import { useState } from "react";
import {
  Box,
  Field,
  Input,
  VStack,
  HStack,
  Button,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import InputBox from "@/components/custom/InputBox";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful", data);
        // Redirect to login page or show success message
        navigate("/");
      } else {
        const error = await response.json();
        console.error("Registration failed", error);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Center py="4" axis="both" w="100vw" h="100vh">
      <Box width="25%" mx="auto" p="6" borderWidth="1px" borderRadius="lg">
        <Heading as="h1" size="3xl" fontWeight="bold" mb="4" textAlign="center">
          Sign up
        </Heading>
        <VStack justifyContent="center" alignItems="center">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <VStack spaceY={4} w="100%">
              <InputBox
                label="Name"
                type="text"
                placeholder="John Doe"
                required={true}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <InputBox
                label="Username"
                type="text"
                placeholder="JDoe"
                required={true}
                onChange={(e) => handleChange("username", e.target.value)}
              />
              <InputBox
                label="Email"
                type="email"
                placeholder="john.doe@example.com"
                required={true}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <InputBox
                label="Password"
                type="password"
                placeholder="aksJ@789Gyh"
                required={true}
                onChange={(e) => handleChange("password", e.target.value)}
              />

              <span>
                Already Have a Account!{" "}
                <Link
                  as={RouterLink}
                  to="/"
                  style={{ color: "#4A90E2", cursor: "pointer" }}
                >
                  Sign In
                </Link>
              </span>

              <Button size="lg" type="submit">
                Sign Up
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default Register;
