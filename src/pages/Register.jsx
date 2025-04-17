import React from 'react'
import {
  Box,
  AbsoluteCenter,
  Field,
  Input,
  VStack,
  HStack,
  Button,
  Heading,
  Center
} from "@chakra-ui/react";

function Register() {
  return (
    <Box>
      <VStack justifyContent="center" alignItems="center" h="100vh">
        <Heading as="h1" size="3xl" fontWeight="bold" mb="4">
          Sign up
        </Heading>
        <Center py="4" axis="both" w="40%">
          <VStack spaceY={4} w="100%">
            <Field.Root required>
              <Field.Label>
                Name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="John Doe" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Username
                <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="me@example.com" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Email
                <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="me@example.com" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Password
                <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="me@example.com" />
            </Field.Root>

            <Button size="lg">Register</Button>
          </VStack>
        </Center>
      </VStack>
    </Box>
  );
}

export default Register
