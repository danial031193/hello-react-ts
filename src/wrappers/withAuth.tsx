import React, { ComponentType, LazyExoticComponent } from 'react';
import { ConnectedComponent } from 'react-redux';
import { AuthGateway } from '@components/index';

const withAuth = (
  WrappedComponent:
    | ComponentType
    | ConnectedComponent<any, any>
    | LazyExoticComponent<ComponentType | ConnectedComponent<any, any>>,
) => {
  return () => (
    <AuthGateway>
      <WrappedComponent />
    </AuthGateway>
  );
};

export default withAuth;
