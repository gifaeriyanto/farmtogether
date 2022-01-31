import React from 'react';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { NextPage } from 'next';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import CenterLayout from 'layout/center';

const Index: NextPage = () => {
  return (
    <CenterLayout>
      <Box textAlign="center">
        <Icon
          as={BsFillCheckCircleFill}
          color="green.500"
          fontSize="6xl"
          mb="4"
        />
        <Heading fontSize="lg">Thank you for signing up!</Heading>
      </Box>
    </CenterLayout>
  );
};

export default Index;
