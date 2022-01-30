import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const ButtonStyle: ComponentSingleStyleConfig = {
  baseStyle: {
    fontWeight: 500,
  },
  sizes: {},
  variants: {
    solid: (props) => {
      if (props.colorScheme === 'yellow') {
        return {
          color: 'white',
          bgColor: 'yellow.500',
          _hover: {
            bgColor: 'yellow.600',
          },
        };
      } else {
        return {};
      }
    },
    subtle: {
      bgColor: 'yellow.100',
      color: 'yellow.500',
    },
  },
  defaultProps: {
    colorScheme: 'yellow',
  },
};
