import { ComponentMultiStyleConfig } from '@chakra-ui/react';

export const InputStyle: ComponentMultiStyleConfig = {
  parts: ['field'],
  baseStyle: {
    field: {
      border: 0,
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 0,
      },
    },
  },
  variants: {
    flushed: {
      field: {
        mt: '-3',
      },
    },
  },
  defaultProps: {
    variant: 'flushed',
    focusBorderColor: 'yellow.500',
  },
};
