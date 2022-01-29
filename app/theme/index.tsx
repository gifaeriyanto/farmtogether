import { extendTheme } from '@chakra-ui/react';

import { ButtonStyle } from 'theme/components/button';
import { FormErrorStyle } from 'theme/components/formError';
import { FormLabelStyle } from 'theme/components/formLabel';
import { HeadingStyle } from 'theme/components/heading';
import { InputStyle } from 'theme/components/input';
import { LinkStyle } from 'theme/components/link';

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
    Button: ButtonStyle,
    FormError: FormErrorStyle,
    FormLabel: FormLabelStyle,
    Heading: HeadingStyle,
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
