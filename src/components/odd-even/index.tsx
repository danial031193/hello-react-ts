import React, { FC } from 'react';
import { getIsOdd } from '@helpers/get-summ';

export interface IOddEven {
  value: number;
}

const OddEven: FC<IOddEven> = ({ value }) => {
  return <div data-testid="container">Value is {getIsOdd(value) ? 'odd' : 'even'}</div>;
};

export default OddEven;
