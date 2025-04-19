import React from "react";
import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Field, Center } from "@chakra-ui/react";
import InputBox from "@/components/custom/InputBox";

function Login() {
  const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        let response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          let data = await response.json();
          console.log("Login successful", data);
          // Handle successful login (e.g., redirect to dashboard)
        } else {
          let error = await response.json();
          console.error("Login failed", error);
          // Handle login failure (e.g., show error message)
        }
    } catch (error) {
        console.log("Error:", error);
    }

  }

  return (
    <Center py="4" axis="both" w="100vw" h="100vh">
      <Box width="25%" mx="auto" p="6" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="lg" textAlign="center" mb="6">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <InputBox
              label="Username"
              type="text"
              placeholder="Enter your username"
              required={true}
              onChange={(e) => handleChange("username", e.target.value)}
            />

            <InputBox
              label="Password"
              type="password"
              placeholder="Enter your password"
              required={true}
              onChange={(e) => handleChange("password", e.target.value)}
            />

            <Button colorScheme="teal" type="submit">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
}

export default Login;
