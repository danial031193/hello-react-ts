import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

export interface IForwardCounterProps {
  incrementCount: () => void;
  decrementCount: () => void;
  reset: () => void;
}

const Counter = forwardRef<IForwardCounterProps>(({}, ref) => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  const decrementCount = useCallback(() => setCount(count - 1), [count]);
  const reset = useCallback(() => setCount(0), []);

  const obj = useMemo(() => ({ a: 1, b: 2, count }), [count]);

  useImperativeHandle(ref, () => ({ incrementCount, decrementCount, reset }), [
    decrementCount,
    incrementCount,
    reset,
  ]);

  useEffect(() => {
    if (count > 3) {
      return;
    }

    document.title = `Вы нажали ${count} раз`;
  }, [count]);

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      count: {count}
      <ul>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Counter;
