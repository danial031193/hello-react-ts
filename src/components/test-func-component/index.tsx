import React, { FC } from 'react';

/**
 * Get sum
 */
const getSum = (a: number, b: number, additional = 0): number => a + b + additional;

interface ITestFuncComponent {
  a: number;
  b: number;
  additional?: number;
}

const TestFuncComponent: FC<ITestFuncComponent> = ({ a, b, additional = 0 }) => {
  return <div>{getSum(a, b, additional)}</div>;
};

export default TestFuncComponent;
