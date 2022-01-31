import _ from 'lodash';

import { API } from 'api/fetcher';

export interface CheckUserIfExistResponse {
  status: string;
}

export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  password: string;
  phone: string;
  agree: boolean;
}

export const checkEmailIfExist = async (email: string) => {
  const formData = new FormData();
  formData.set('email', email);
  const res = await API.post<CheckUserIfExistResponse>(
    '/ft/check-email',
    formData,
  );
  return res;
};

export const checkPhoneIfExist = async (phone: string) => {
  const formData = new FormData();
  formData.set('phone', phone);
  const res = await API.post<CheckUserIfExistResponse>(
    '/ft/check-phone',
    formData,
  );
  return res;
};

export const registerUser = async (formData: FormData) => {
  const res = await API.post<User>('/ft/register', formData);
  return res;
};
