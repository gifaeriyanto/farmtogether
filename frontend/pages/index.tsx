import React from 'react';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

import { RegisterContainer } from 'containers/register';
import CenterLayout from 'layout/center';

const Index: NextPage = () => {
  return (
    <CenterLayout>
      <Heading fontSize="lg" mb="10">
        Become a farmland investor
      </Heading>

      <RegisterContainer />
    </CenterLayout>
  );
};

export default Index;
