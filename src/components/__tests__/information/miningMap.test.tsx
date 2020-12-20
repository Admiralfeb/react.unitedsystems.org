import { render } from '@testing-library/react';
import { MiningMap } from 'components/information';

describe('Mining Maps', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<MiningMap />);
    expect(baseElement).toMatchSnapshot();
  });
});
