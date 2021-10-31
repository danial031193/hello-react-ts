import { render, screen } from '@testing-library/react';
import OddEven from './index';

describe('render snapshot for odd-even component', () => {
  test('render snapshot', () => {
    const domTree = render(<OddEven value={5} />);

    expect(domTree).toMatchSnapshot();
  });

  test('render odd value', () => {
    render(<OddEven value={5} />);

    expect(screen.getByTestId('container')).toHaveTextContent('Value is odd');
  });

  test('render even value', () => {
    render(<OddEven value={4} />);

    expect(screen.getByTestId('container')).toHaveTextContent('Value is even');
  });
});
