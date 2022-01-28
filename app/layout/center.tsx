import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';

const CenterLayout: React.FC = ({ children }) => {
  return (
    <Flex justify="center" align="center" py="70px" minH="100vh">
      <Container p="10">
        <Box bgColor="white" boxShadow="lg" p="8" borderRadius="sm" minW="">
          {children}
        </Box>
      </Container>
    </Flex>
  );
};

export default CenterLayout;
