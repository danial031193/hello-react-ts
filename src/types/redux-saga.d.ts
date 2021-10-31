import IState from '@interfaces/redux/IState';
import {
  SelectEffect,
  Tail,
  SelectEffectDescriptor as DefaultSelectEffectDescriptor,
} from '@redux-saga/core/effects';

declare module 'redux-saga/effects' {
  export interface SelectEffectDescriptor extends DefaultSelectEffectDescriptor {
    selector(state: IState, ...args: any[]): any;
  }

  export function select<Fn extends (state: IState, ...args: any[]) => ReturnType<Fn>>(
    selector: Fn,
    ...args: Tail<Parameters<Fn>>
  ): SelectEffect;
}
