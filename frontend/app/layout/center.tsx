import React from 'react';
import { Box, Container, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsChevronLeft } from 'react-icons/bs';

export interface CenterLayoutProps {
  withBackButton?: boolean;
}

export const CenterLayout: React.FC<CenterLayoutProps> = ({
  withBackButton,
  children,
}) => {
  const router = useRouter();

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
        pos="relative"
      >
        {withBackButton && (
          <IconButton
            aria-label="back"
            icon={<BsChevronLeft />}
            onClick={router.back}
            colorScheme="gray"
            bgColor="white"
            pos="absolute"
            left="-60px"
            top="0"
            borderRadius="0"
            boxShadow="lg"
            display={{ base: 'none', md: 'flex' }}
          />
        )}
        {children}
      </Box>
    </Container>
  );
};
