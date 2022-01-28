import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link as CLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import CenterLayout from 'layout/center';
import { NextPage } from 'next';
import React from 'react';

const Index: NextPage = () => {
  return (
    <CenterLayout>
      <Heading fontSize="lg" mb="10">
        Become a farmland investor
      </Heading>

      <VStack spacing="4">
        <FormControl>
          <FormLabel htmlFor="firstname">First Name</FormLabel>
          <Input id="firstname" type="firstname" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="lastname">Last Name</FormLabel>
          <Input id="lastname" type="lastname" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Input id="country" type="country" />
        </FormControl>

        <FormControl borderLeft="2px solid" borderColor="yellow.500" pl="4">
          <HStack spacing="4" alignItems="flex-start">
            <Box mt="1">
              <Checkbox colorScheme="yellow" size="lg" />
            </Box>
            <Text fontSize="sm">
              I agree to the <CLink>terms of service</CLink>,{' '}
              <CLink>privacy policy</CLink>,
              <CLink>electronic communications disclosure</CLink>, and{' '}
              <CLink>electronic funds transfer disclosure</CLink>
            </Text>
          </HStack>
        </FormControl>

        <Button isFullWidth h="60px">
          Continue
        </Button>
      </VStack>
    </CenterLayout>
  );
};

export default Index;
