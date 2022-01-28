import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from 'layout/main';
import { AppProps } from 'next/app';
import React from 'react';
import { theme } from 'theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
