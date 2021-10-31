import { render } from '@testing-library/react';
import Post, { IPost } from './index';

describe('render snapshot for post component', () => {
  test('render snapshot', () => {
    const props: IPost = {
      body: 'body',
      title: 'title',
      userId: 11,
    };

    const domTree = render(<Post {...props} />);
    expect(domTree).toMatchSnapshot();
  });
});
