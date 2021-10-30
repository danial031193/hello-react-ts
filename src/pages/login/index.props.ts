import { login } from '@store/account/action-creators';
import IState from '@interfaces/redux/IState';
import { ReplacePropertiesReturnType } from '@interfaces/common';

const mapStateToProps = (state: IState) =>
  ({
    accountId: state.account.id,
    usersList: state.users.list,
  } as const);

const mapDispatchToProps = {
  login,
};

export type ILoginStateToProps = ReturnType<typeof mapStateToProps>;
export type ILoginDispatchToProps = ReplacePropertiesReturnType<typeof mapDispatchToProps, void>;

export { mapStateToProps, mapDispatchToProps };
