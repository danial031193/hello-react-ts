import { getSumm, getIsEven, getIsOdd, getObject } from '@helpers/get-summ';

describe('helpers testing', () => {
  test('getSumm test', () => {
    const result = getSumm(3, 5);

    expect(result).toEqual(8);
  });

  test('getIsEven test', () => {
    const isEven = getIsEven(5);

    expect(isEven).toBeFalsy();
  });

  test('getIsOdd test', () => {
    const isEven = getIsOdd(5);

    expect(isEven).toBeTruthy();
  });

  test('getObject test with number', () => {
    const object = getObject(5, 'test');

    expect({ 5: 'test' }).toEqual(object);
  });

  test('getObject test with string', () => {
    const object = getObject('5', 'test');

    expect({ '5': 'test' }).toEqual(object);
  });
});
