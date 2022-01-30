import React from 'react';
import {
  chakra,
  ChakraProps,
  Theme,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { FaCaretDown } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import Select, { components, Props, StylesConfig } from 'react-select';

export interface AdvancedSelectProps extends Props, Omit<ChakraProps, 'css'> {
  isInvalid?: boolean;
}

const SelectFactoried = chakra<typeof Select, Props>(Select);

const customStyles = (props: AdvancedSelectProps): StylesConfig => {
  return {
    control: (provided, state) => {
      const focusedStyle = () => {
        if (state.isFocused) {
          return {
            boxShadow: 'none',
            borderColor: '#FBB73C',
          };
        }
        return;
      };

      const menuIsOpenStyle = () => {
        if (state.menuIsOpen) {
          return {
            ...focusedStyle(),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          };
        }
      };

      const isInvalid = () => {
        if (props.isInvalid) {
          return {
            borderBottom: '1px solid red',
          };
        }
      };

      return {
        ...provided,
        border: 0,
        borderBottom: '1px solid #E2E8F0',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        '&:hover': {
          borderBottom: '1px solid #E2E8F0',
        },
        ...focusedStyle(),
        ...menuIsOpenStyle(),
        ...isInvalid(),
      };
    },
    indicatorSeparator: (provided) => ({
      ...provided,
      opacity: 0,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingLeft: 16,
      paddingRight: 16,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      svg: {
        width: 16,
        height: 16,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 0,
      paddingRight: 12,
    }),
  };
};

export const AdvancedSelect: React.FC<AdvancedSelectProps> = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ClearIndicator = (rest: any) => {
    return (
      <components.DropdownIndicator {...rest}>
        <RiCloseFill />
      </components.DropdownIndicator>
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownIndicator = (rest: any) => {
    return (
      <components.DropdownIndicator {...rest}>
        <FaCaretDown />
      </components.DropdownIndicator>
    );
  };

  return (
    <SelectFactoried
      styles={customStyles(props)}
      components={{ ClearIndicator, DropdownIndicator }}
      placeholder=""
      {...props}
    />
  );
};
