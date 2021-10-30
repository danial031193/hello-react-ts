import React, { PureComponent, ReactNode } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { IAuthGatewayStateToProps } from '@components/auth-gateway/index.props';
import { RouteComponentProps } from 'react-router';

type IAuthGateway = RouteComponentProps & IAuthGatewayStateToProps & { children: ReactNode };

/**
 * Component for implementation secure feature.
 * Protect some pages with authentication.
 */
class AuthGateway extends PureComponent<any, IAuthGateway> {
  render() {
    const { location, accountId } = this.props;

    const isAuth = accountId;
    const prevUrl = `${location.pathname}${location.search}`;

    return (
      <>
        {(isAuth && this.props.children) || (
          <Redirect to={{ pathname: '/login', state: { prevUrl } }} />
        )}
      </>
    );
  }
}

export default withRouter(AuthGateway);
