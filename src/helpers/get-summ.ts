export const getSumm = (a: number, b: number) => a + b;

export const getIsEven = (value: number) => !(value % 2);

export const getIsOdd = (value: number) => Boolean(value % 2);

export const getObject = (key: string | number, value: string) => ({ [key]: value });
