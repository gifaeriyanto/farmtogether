import bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const checkPassword = (
  password: string,
  currentPassword: string,
  isSuccess: (status: boolean) => void
) => {
  return bcrypt.compare(password, currentPassword, (_err, res) => {
    isSuccess(res);
  });
};
