import React, { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TestAbstract,
  TestClass,
  TestFuncComponent,
  ThemeSwitcher,
  Timer,
  MouseListener,
  Counter,
  UserList,
} from '@components/index';
import ThemeContext from '@context/ThemeContext';
import { IForwardCounterProps } from '@components/counter';

const Home: FC = () => {
  const [timerIsDisplayed, setTimerIsDisplayed] = useState(true);

  const counter = useRef<IForwardCounterProps | null>(null);

  const toggleTimerDisplay = () => setTimerIsDisplayed((prevState) => !prevState);

  const incrementCount = () => counter.current?.incrementCount();
  const decrementCount = () => counter.current?.decrementCount();
  const resetCount = () => counter.current?.reset();

  return (
    <>
      <Link to="/forms">Go to forms page</Link>
      <Link
        to={{
          pathname: '/forms',
          search: '?sort=name',
          hash: '#the-hash',
          state: { from: 'Home' },
        }}
      >
        Link with object prop
      </Link>
      <br />
      <UserList id="asd" />
      <br />
      Classes
      <TestAbstract />
      <TestClass />
      <br />
      Functional
      <TestFuncComponent a={1} b={2} />
      <TestFuncComponent a={1} b={2} additional={5} />
      <br />
      Counter
      <button onClick={incrementCount}>plus</button>
      <button onClick={decrementCount}>minus</button>
      <button onClick={resetCount}>reset</button>
      <Counter ref={counter} />
      <br />
      Timer
      <button onClick={toggleTimerDisplay}>{timerIsDisplayed ? 'Hide' : 'Display'} timer</button>
      {timerIsDisplayed && <Timer />}
      <br />
      Theme
      <ThemeSwitcher />
      <br />
      ThemeContext Consumer
      <ThemeContext.Consumer>{({ theme }) => <div>{theme}</div>}</ThemeContext.Consumer>
      <br />
      MouseListener
      <MouseListener>
        {(coordinates) => Object.entries(coordinates).map(([key, value]) => `${key}: ${value}`)}
      </MouseListener>
      <MouseListener>
        {({ x, y }) => (
          <div>
            Кординаты курсора:
            <br />
            x: {x}, y: {y}
          </div>
        )}
      </MouseListener>
    </>
  );
};

export default Home;
