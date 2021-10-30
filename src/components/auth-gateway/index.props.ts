import IState from '@interfaces/redux/IState';

const mapStateToProps = (state: IState) => ({
  accountId: state.account.id,
});

export type IAuthGatewayStateToProps = ReturnType<typeof mapStateToProps>;

export { mapStateToProps };
