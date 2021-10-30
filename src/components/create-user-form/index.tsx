import React, { FC } from 'react';
import {
  ICreateUserFormDispatchToProps,
  ICreateUserFormStateToProps,
} from '@components/create-user-form/index.props';

type ICreateUserForm = ICreateUserFormStateToProps & ICreateUserFormDispatchToProps;

const CreateUserForm: FC<ICreateUserForm> = ({ addUser, values, setValue }) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.name, e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Username</p>
        <input type="text" name="username" onChange={onChangeInput} value={values.username} />
      </label>

      <label>
        <p>Password</p>
        <input type="password" name="password" onChange={onChangeInput} value={values.password} />
      </label>

      <button type="submit">Submit form</button>
    </form>
  );
};

export default CreateUserForm;
