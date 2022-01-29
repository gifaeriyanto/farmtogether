import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link as CLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export interface RegisterFormFields {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  agree: string;
}

export const RegisterContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>();
  const router = useRouter();

  const onSubmit = (data: unknown) => {
    router.push('/set-password');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="4">
        <FormControl isInvalid={!!errors.first_name}>
          <FormLabel htmlFor="first_name">First Name</FormLabel>
          <Input
            id="first_name"
            {...register('first_name', {
              required: true,
            })}
          />
          <FormErrorMessage>First name is required.</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.last_name}>
          <FormLabel htmlFor="last_name">Last Name</FormLabel>
          <Input
            id="last_name"
            {...register('last_name', {
              required: true,
            })}
          />
          <FormErrorMessage>Last name is required.</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: true,
            })}
          />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.country}>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Input
            id="country"
            {...register('country', {
              required: true,
            })}
          />
          <FormErrorMessage>Country is required.</FormErrorMessage>
        </FormControl>
      </VStack>

      <VStack spacing="8" mt="8">
        <FormControl borderLeft="2px solid" borderColor="yellow.500" pl="4">
          <Checkbox
            colorScheme="yellow"
            size="lg"
            alignItems="flex-start"
            {...register('agree', {
              required: true,
            })}
          >
            <Text fontSize="sm" mt="-1" ml="1">
              I agree to the <CLink>terms of service</CLink>,{' '}
              <CLink>privacy policy</CLink>,
              <CLink>electronic communications disclosure</CLink>, and{' '}
              <CLink>electronic funds transfer disclosure</CLink>
            </Text>
          </Checkbox>
        </FormControl>

        <Button
          isFullWidth
          h="60px"
          type="submit"
          isDisabled={!!Object.keys(errors).length}
          boxShadow="0px 20px 40px rgba(254, 199, 98, 0.25)"
        >
          Continue
        </Button>
      </VStack>
    </form>
  );
};
