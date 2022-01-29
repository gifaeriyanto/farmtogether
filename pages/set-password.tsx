import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import { SetPasswordContainer } from 'containers/setPassword';
import CenterLayout from 'layout/center';

const Index: NextPage = () => {
  return (
    <CenterLayout>
      <Heading fontSize="lg" mb="4">
        Enter your password
      </Heading>
      <Text mb="10">
        Please make sure your password is at least 6 characters and includes a
        mixture of both uppercase and lowercase letters.
      </Text>

      <SetPasswordContainer />
    </CenterLayout>
  );
};

export default Index;
