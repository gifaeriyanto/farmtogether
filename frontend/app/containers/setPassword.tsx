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
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useMutation } from 'react-query';

import { checkPhoneIfExist, registerUser } from 'api/register';
import { InputMask } from 'components/inputMask';

export interface SetPasswordFormFields {
  password: string;
  phone: string;
}

export const SetPasswordContainer: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useBoolean();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SetPasswordFormFields>();

  const registerMutation = useMutation(
    'register',
    ({ formData }: { formData: FormData }) => registerUser(formData),
    {
      onSuccess: () => {
        toast({
          title: 'Account created',
          description: "We've created your account.",
          status: 'success',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
        localStorage.removeItem('tmp-data');
        router.push('/success');
      },
    },
  );

  const onSubmit = (data: SetPasswordFormFields) => {
    const tmpData = localStorage.getItem('tmp-data');
    if (!tmpData) {
      return;
    }

    const parsed = JSON.parse(tmpData);
    const combineData = { ...parsed, ...data };
    const formData = new FormData();
    Object.keys(combineData).forEach((key) => {
      formData.append(key, combineData[key]);
    });
    registerMutation.mutate({ formData });
  };

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
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/,
                  message:
                    'Must contain at least one uppercase and one lowercase',
                },
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
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\+1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g,
                message: 'Please fill with +1(XXX)XXX-XXXX format',
              },
              validate: async (value) => {
                try {
                  const { status } = await checkPhoneIfExist(value);
                  return status === 200;
                } catch (error) {
                  return 'Phone number is exist';
                }
              },
            }}
            render={({ field }) => (
              <InputMask
                id="phone"
                placeholder="+1(XXX)XXX-XXXX"
                onChange={field.onChange}
                mask="+1(999)999-9999"
              />
            )}
          />

          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
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
