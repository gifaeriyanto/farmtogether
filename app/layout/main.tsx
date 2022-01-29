import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { Logo } from 'components/logo';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        bgColor="white"
        px="8"
        h="70px"
        pos="fixed"
        top="0"
        left="0"
        w="full"
        boxShadow="lg"
        zIndex="2"
      >
        <Link href="/">
          <a>
            <Logo w="110px" h="50px" />
          </a>
        </Link>
        <Button variant="subtle" colorScheme="yellow" size="sm" px="8" py="5">
          LOGIN
        </Button>
      </Flex>
      <Box>{children}</Box>
    </>
  );
};
