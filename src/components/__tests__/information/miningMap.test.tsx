import { cleanup, render } from '@testing-library/react';
import { MiningMap } from 'components/information';

describe('Mining Maps', () => {
  afterEach(cleanup);

  it('should match the snapshot', () => {
    const { baseElement } = render(<MiningMap />);
    expect(baseElement).toMatchSnapshot();
  });
});
