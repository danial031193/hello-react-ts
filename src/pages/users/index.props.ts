import { removeUser } from '@store/users/action-creators';
import { ReplacePropertiesReturnType } from '@interfaces/common';
import IState from '@interfaces/redux/IState';

const mapStateToProps = (state: IState) =>
  ({
    accountId: state.account.id,
    users: state.users.list,
  } as const);

const mapDispatchToProps = {
  removeUser,
};

export type IUsersStateToProps = ReturnType<typeof mapStateToProps>;
export type IUsersDispatchToProps = ReplacePropertiesReturnType<typeof mapDispatchToProps, void>;

export { mapStateToProps, mapDispatchToProps };
