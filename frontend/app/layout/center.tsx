import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const CenterLayout: React.FC = ({ children }) => {
  return (
    <Container
      px={{ base: '0', md: '4' }}
      maxW={{ base: 'full', md: 'container.sm' }}
      centerContent
      minH="100vh"
      pt={{ base: '80px', md: '0' }}
      justifyContent={{ base: 'flex-start', md: 'center' }}
    >
      <Box
        bgColor="white"
        boxShadow={{ base: 'none', md: 'lg' }}
        p="8"
        borderRadius="sm"
      >
        {children}
      </Box>
    </Container>
  );
};

export default CenterLayout;
