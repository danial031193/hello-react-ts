import { render } from '@testing-library/react';
import MouseListener, { IMouseListener, ICoords } from './index';

describe("render snapshot for 'mouse-listener' component", () => {
  test('render snapshot', () => {
    const props: IMouseListener = {
      children: jest.fn((coords: ICoords) => (
        <div>
          {coords.x}, {coords.y}
        </div>
      )),
    };

    const domTree = render(<MouseListener children={props.children} />);
    expect(domTree).toMatchSnapshot();
  });
});
