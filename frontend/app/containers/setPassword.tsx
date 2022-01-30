import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export interface SetPasswordFormFields {
  password: string;
  phone: string;
}

export const SetPasswordContainer: React.FC = () => {
  const [showPassword, setShowPassword] = useBoolean();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetPasswordFormFields>();

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="4">
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder="Enter password"
              type={showPassword ? 'test' : 'password'}
              {...register('password', {
                required: true,
              })}
            />
            <InputRightElement mt="-4">
              <IconButton
                aria-label="show-password"
                size="sm"
                variant="ghost"
                colorScheme="gray"
                color="gray.300"
                fontSize="2xl"
                onClick={setShowPassword.toggle}
                icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Password is required.</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            id="phone"
            placeholder="+1(XXX)XXX-XXXX"
            {...register('phone', {
              required: true,
            })}
          />
          <FormErrorMessage>Phone number is required.</FormErrorMessage>
        </FormControl>
      </VStack>

      <Button
        mt="10"
        isFullWidth
        h="60px"
        type="submit"
        isDisabled={!!Object.keys(errors).length}
        boxShadow="0px 20px 40px rgba(254, 199, 98, 0.25)"
      >
        Sign Up
      </Button>
    </form>
  );
};
