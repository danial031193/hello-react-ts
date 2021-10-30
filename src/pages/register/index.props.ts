import IState from '@interfaces/redux/IState';

const mapStateToProps = (state: IState) =>
  ({
    accountId: state.account.id,
  } as const);

export type IRegisterStateToProps = ReturnType<typeof mapStateToProps>;

export { mapStateToProps };
