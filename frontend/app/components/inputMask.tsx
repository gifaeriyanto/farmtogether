import React from 'react';
import { chakra } from '@chakra-ui/react';
import ReactInputMask, { Props } from 'react-input-mask';

const ChakraInputMask = chakra(ReactInputMask, {
  baseStyle: {
    w: 'full',
    h: '39px',
    borderRadius: '0',
    borderBottom: '1px solid',
    borderColor: 'gray.200',
    fontSize: 'md',
    _focus: {
      outline: 'none',
      borderColor: 'yellow.500',
      boxShadow: '0px 1px 0px 0px #fec762',
    },
  },
});

export const InputMask: React.FC<Props> = (props) => {
  return <ChakraInputMask {...props} />;
};
