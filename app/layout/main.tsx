import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi';

import { Logo, SmallLogo } from 'components/logo';

export const MainLayout: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        bgColor="white"
        px="8"
        h={{ base: '50px', sm: '70px' }}
        pos="fixed"
        top="0"
        left="0"
        w="full"
        boxShadow="lg"
        zIndex="2"
      >
        <Link href="/">
          <a>
            <Logo
              display={{ base: 'none', md: 'inline-block' }}
              w="110px"
              h="50px"
            />
            <SmallLogo
              display={{ base: 'inline-block', md: 'none' }}
              w="30px"
              h="27px"
            />
          </a>
        </Link>

        <Button
          variant="subtle"
          colorScheme="yellow"
          size="sm"
          px="8"
          py="5"
          display={{ base: 'none', lg: 'flex' }}
        >
          LOGIN
        </Button>

        {/* Mobile menu */}
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          aria-label="menu-toggle"
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          fontSize={{ base: '2xl', sm: '3xl' }}
          color="gray.700"
        >
          <BiMenuAltRight />
        </IconButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>FarmTogether</DrawerHeader>

            <DrawerBody>
              <Link href="/">
                <a>
                  <Box
                    py="4"
                    borderY="1px solid"
                    borderColor="gray.100"
                    fontWeight={500}
                  >
                    Login
                  </Box>
                </a>
              </Link>
            </DrawerBody>

            <DrawerFooter>
              <Text color="gray.500">© 2022 FarmTogether, Inc.</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Box>{children}</Box>
    </>
  );
};
