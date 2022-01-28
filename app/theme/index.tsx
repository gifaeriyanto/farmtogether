import { extendTheme } from '@chakra-ui/react';

import { ButtonStyle } from './components/button';
import { FormLabelStyle } from './components/formLabel';
import { InputStyle } from './components/input';
import { LinkStyle } from './components/link';

export const theme = extendTheme({
  colors: {
    yellow: {
      100: '#FEF8DF',
      200: '#FEEFC0',
      300: '#FEE4A0',
      400: '#FED989',
      500: '#FEC762',
      600: '#DAA147',
      700: '#B67E31',
      800: '#935D1F',
      900: '#794612',
    },
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
    mono: 'Menlo, monospace',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
      },
    },
    Button: ButtonStyle,
    FormLabel: FormLabelStyle,
    Input: InputStyle,
    Link: LinkStyle,
  },
  shadows: {
    lg: '0px 3px 28px rgba(35, 37, 46, 0.05)',
  },
  styles: {
    global: {
      body: {
        bg: '#F5F7FA',
        minH: '100vh',
        fontSize: '14px',
      },
    },
  },
  config: {
    cssVarPrefix: 'ft',
  },
});
