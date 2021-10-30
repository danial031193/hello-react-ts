import { addUser, updateNewUser } from '@store/users/action-creators';
import IState from '@interfaces/redux/IState';
import { ReplacePropertiesReturnType } from '@interfaces/common';

const mapStateToProps = (state: IState) =>
  ({
    values: state.users.newUser,
  } as const);

const mapDispatchToProps = {
  addUser,
  setValue: updateNewUser,
};

export type ICreateUserFormStateToProps = ReturnType<typeof mapStateToProps>;
export type ICreateUserFormDispatchToProps = ReplacePropertiesReturnType<
  typeof mapDispatchToProps,
  void
>;

export { mapStateToProps, mapDispatchToProps };
