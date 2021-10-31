import IState from '@interfaces/redux/IState';

declare module 'react-redux' {
  export interface DefaultRootState extends IState {
    someProperty: string;
  }
}
