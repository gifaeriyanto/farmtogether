import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link as CLink,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import { Country, useCountries } from 'api/countries';
import { AdvancedSelect } from 'components/advanceSelect';
import { checkEmailIfExist } from 'api/register';

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
    control,
  } = useForm<RegisterFormFields>();
  const router = useRouter();
  const { data: countries } = useCountries();

  const onSubmit = (data: RegisterFormFields) => {
    localStorage.setItem('tmp-data', JSON.stringify(data));
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
          <FormErrorMessage>First name is required</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.last_name}>
          <FormLabel htmlFor="last_name">Last Name</FormLabel>
          <Input
            id="last_name"
            {...register('last_name', {
              required: true,
            })}
          />
          <FormErrorMessage>Last name is required</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              validate: async (value) => {
                try {
                  const { status } = await checkEmailIfExist(value);
                  return status === 200;
                } catch (error) {
                  return 'Email is exist';
                }
              },
            }}
            render={({ field }) => (
              <Input id="email" type="email" onChange={field.onChange} />
            )}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.country}>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <AdvancedSelect
                options={countries}
                getOptionValue={(option) => (option as Country).id}
                getOptionLabel={(option) => (option as Country).name}
                onChange={(value) => field.onChange((value as Country).id)}
              />
            )}
          />
          <FormErrorMessage>Country is required</FormErrorMessage>
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
